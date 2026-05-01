import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Proxy route for admin API calls.
 * Forwards requests to Cordia-API and adds the master key from the server session.
 */
export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  return handleProxy(req, params.path);
}

export async function POST(req: NextRequest, { params }: { params: { path: string[] } }) {
  return handleProxy(req, params.path);
}

async function handleProxy(req: NextRequest, path: string[]) {
  const cookieStore = await cookies();
  const session = cookieStore.get('staff_session')?.value;

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.cordialane.com';
  const targetUrl = `${apiBaseUrl}/api/v1/admin/${path.join('/')}`;

  try {
    const body = req.method === 'POST' ? await req.json() : undefined;
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session}`
      },
      body: body ? JSON.stringify(body) : undefined
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(`Admin Proxy Error (${targetUrl}):`, error);
    return NextResponse.json({ error: 'Failed to connect to API' }, { status: 502 });
  }
}

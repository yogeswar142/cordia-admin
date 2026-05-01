"use server"

import { cookies } from "next/headers";

/**
 * Validates admin credentials and sets a secure session cookie.
 * This is a simplified implementation using the Master Key.
 */
export async function loginAdmin(terminalId: string, passkey: string) {
  // In a real production system, terminalId would be checked against an AdminUser table.
  // For this implementation, we validate the passkey against the master key.
  const adminKey = process.env.ADMIN_MASTER_KEY || 'cordia_local_dev_key';

  if (passkey !== adminKey) {
    return { success: false, error: "Invalid access credentials" };
  }

  const cookieStore = await cookies();
  cookieStore.set("staff_session", passkey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400, // 24 hours
    path: "/",
  });

  return { success: true };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("staff_session");
}

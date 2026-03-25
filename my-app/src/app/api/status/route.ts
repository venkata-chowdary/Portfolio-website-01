import { NextResponse } from "next/server";
import { getLastSeen } from "@/lib/onlineStatusStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(
    { lastSeen: getLastSeen() },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}


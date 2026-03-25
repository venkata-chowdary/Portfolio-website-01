import { NextResponse } from "next/server";
import { setLastSeen } from "@/lib/onlineStatusStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST() {
  const lastSeen = setLastSeen();

  return NextResponse.json(
    { ok: true, lastSeen },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}


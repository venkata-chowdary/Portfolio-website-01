const HEARTBEAT_URL =
  process.env.HEARTBEAT_URL || "https://ivnc.vercel.app/api/heartbeat";

async function sendHeartbeat() {
  try {
    const response = await fetch(HEARTBEAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const now = new Date().toISOString();
    if (!response.ok) {
      console.error(`[${now}] Heartbeat failed: ${response.status} ${response.statusText}`);
      return;
    }

    console.log(`[${now}] Heartbeat sent successfully to ${HEARTBEAT_URL}`);
  } catch (error) {
    const now = new Date().toISOString();
    console.error(`[${now}] Heartbeat error:`, error?.message || error);
  }
}

sendHeartbeat();
setInterval(sendHeartbeat, 60_000);


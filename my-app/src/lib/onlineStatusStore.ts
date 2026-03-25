declare global {
  var __portfolioLastSeen: number | undefined;
}

const globalStore = globalThis as typeof globalThis & {
  __portfolioLastSeen?: number;
};

if (typeof globalStore.__portfolioLastSeen !== "number") {
  globalStore.__portfolioLastSeen = 0;
}

export function setLastSeen(timestamp: number = Date.now()) {
  globalStore.__portfolioLastSeen = timestamp;
  return globalStore.__portfolioLastSeen;
}

export function getLastSeen() {
  return globalStore.__portfolioLastSeen ?? 0;
}


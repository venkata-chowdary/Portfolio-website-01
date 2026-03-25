import Link from "next/link";
import { OnlineStatus } from "./OnlineStatus";

export function NavBar() {
    return (
        <div className="max-w-none lg:max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 lg:px-6 lg:py-10 py-8 absolute top-0 w-full left-1/2 -translate-x-1/2">
            <div>
                <Link href="/" className="static-underline text-2xl lg:text-3xl font-semibold tracking-wide">VNC.</Link>
            </div>
            <OnlineStatus />
        </div>
    );
}

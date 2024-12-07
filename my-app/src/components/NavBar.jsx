import { ResumeBtn } from "./ResumeBtn";

export function NavBar() {
    return (
        <div className="max-w-none lg:max-w-6xl mx-auto flex items-center justify-between px-6 lg:py-10 py-8 absolute top-0 w-full left-1/2 -translate-x-1/2">
            <div>
                <a href="/" className="static-underline text-3xl font-semibold tracking-wide">VNC.</a>
            </div>
            <ResumeBtn />
        </div>
    );
}

export function Skill({ skill }) {
    return (
        <p className="cursor-pointer text-[.8rem] m-1 rounded-2xl border-pink-600 border-2 px-3 py-1 hover:bg-pink-600 font-medium transition-colors duration-300 ease-in-out">
            {skill}
        </p>
    );
}

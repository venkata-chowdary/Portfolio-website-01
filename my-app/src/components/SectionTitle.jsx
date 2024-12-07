export function SectionTitle({ sectionName, customClassName }) {
    return (
        <div className="w-fit">
            <h1 className={`font-bold ${customClassName || ""}`}>{sectionName}</h1>
            <div className="w-full mx-auto h-1 bg-[#de1d8d]"></div>
        </div>
    );
}

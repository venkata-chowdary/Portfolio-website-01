import { EducationTimeLine } from "./EducationTimeLine";
import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
    return (
        <div className="lg:max-w-6xl mx-auto px-6 py-4 my-4 lg:my-16">
            <SectionTitle sectionName="Education" customClassName="lg:text-3xl text-xl" />
            <div className="mt-4">
                <EducationTimeLine/>
            </div>
        </div>
    )
}

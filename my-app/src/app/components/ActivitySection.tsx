import { GithubHeatmap } from "@/components/GithubHeatmap";
import { SectionTitle } from "@/components/SectionTitle";

export function ActivitySection() {
    return (
        <section className="lg:max-w-6xl mx-auto px-6 py-4 my-4 lg:my-16">
            <SectionTitle
                sectionName="Developer Activity"
                customClassName="lg:text-3xl text-xl"
            />

            <div className="mt-6">
                <GithubHeatmap username="venkata-chowdary" />
            </div>
        </section>
    );
}

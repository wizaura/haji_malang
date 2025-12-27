import LibraryCore from "@/components/facillities/library/Core";
import LibraryHero from "@/components/facillities/library/Hero";
import PageCTA from "@/components/ui/PageCTA";

export default function Library() {
    return (
        <div>
            <LibraryHero />
            <LibraryCore />
            <PageCTA
                title={
                    <>
                        Empower Learning Through
                        <br className="hidden sm:block" />
                        Knowledge and Research
                    </>
                }
                subtitle="Join a campus where academic curiosity is encouraged,
                                        supported, and guided through world-class learning resources."
                primaryCta={{ label: "Apply for 2026–27", href: "/admissions" }}
                secondaryCta={{ label: "Contact Admissions", href: "/contact" }}
            />
        </div>
    )
}
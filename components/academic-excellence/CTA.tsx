import PageCTA from "../ui/PageCTA";

export default function AcademicCTA() {
    return (
        <PageCTA
            title={
                <>
                    Begin Your Academic Journey <br className="hidden sm:block" />
                    with Confidence
                </>
            }
            subtitle="Limited seats are available for our Pre-University Science programs.
                Join an academically disciplined environment designed to prepare
                young women for higher education and competitive success."
            primaryCta={{ label: "Apply for 2026–27", href: "/admissions" }}
            secondaryCta={{ label: "Speak to Admissions", href: "/contact" }}
        />

    );
}

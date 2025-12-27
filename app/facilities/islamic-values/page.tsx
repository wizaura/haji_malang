import IslamicValuesCore from "@/components/facillities/islamic-values/Core";
import IslamicValuesHero from "@/components/facillities/islamic-values/Hero";
import PageCTA from "@/components/ui/PageCTA";

export default function Islamicvalues() {
    return (
        <div>
            <IslamicValuesHero />
            <IslamicValuesCore />
            <PageCTA
                badge="Admissions 2026-27"
                title={
                    <>
                        A Balanced Education for <br className="hidden sm:block" />
                        This World and the Hereafter
                    </>
                }
                subtitle="Join an institution where academic excellence and Islamic values
              walk hand in hand."
                primaryCta={{ label: "Apply Now", href: "/admissions" }}
                secondaryCta={null}
            />

        </div>
    )
}
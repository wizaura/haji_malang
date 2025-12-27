import HealthWellnessCore from "@/components/facillities/health-wellness/Core";
import FacilityHero from "@/components/ui/FacilityHero";
import PageCTA from "@/components/ui/PageCTA";

export default function HealthWellness() {
    return (
        <div>
            <FacilityHero
                title="Nurturing Mind,"
                highlight="Body, and Soul"
                description="A healthy body supports a focused mind and a balanced life.
                        Our campus provides thoughtfully designed wellness and
                        recreational facilities that support holistic student growth."
            />
            <HealthWellnessCore />
            <PageCTA
                title={
                    <>
                        A Campus That Cares for
                        <br className="hidden sm:block" />
                        Every Aspect of Student Wellbeing
                    </>
                }
                subtitle="Experience an environment where health, safety, and balance
                            are prioritized alongside academic excellence."
                primaryCta={{ label: "Apply for 2026–27", href: "/admissions" }}
                secondaryCta={{ label: "Contact Admissions", href: "/contact" }}
            />
        </div>
    )
}
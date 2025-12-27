import CivilServicesCore from "@/components/facillities/civil-services/Core";
import FacilityHero from "@/components/ui/FacilityHero";
import PageCTA from "@/components/ui/PageCTA";

export default function CivilServices() {
    return (
        <div>
            <FacilityHero
                title="Building the Leaders"
                highlight="of Tomorrow"
                description="Inspired by the success of our boys’ wing foundation model,
                    we encourage young women to aspire for India’s highest civil
                    services and contribute meaningfully to the nation."
            />
            <CivilServicesCore />
            <PageCTA
                title={
                    <>
                        Inspire a Path of Leadership
                        <br className="hidden sm:block" />
                        and Service to the Nation
                    </>
                }
                subtitle="Join a foundation program that instills ambition,
                            integrity, and purpose — guiding students towards
                            meaningful careers in public service."
                primaryCta={{ label: "Apply for 2026–27", href: "/admissions" }}
                secondaryCta={{ label: "Speak to Admissions", href: "/contact" }}
            />
        </div>
    )
}
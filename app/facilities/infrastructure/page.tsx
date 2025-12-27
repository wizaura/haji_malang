import InfrastructureCore from "@/components/facillities/infrastructure/Core";
import InfrastructureHero from "@/components/facillities/infrastructure/Hero";
import PageCTA from "@/components/ui/PageCTA";

export default function Infrastructure() {
    return (
        <div>
            <InfrastructureHero />
            <InfrastructureCore />
            <PageCTA
                title={
                    <>
                        A Campus Designed to Support
                        <br className="hidden sm:block" />
                        Every Aspect of Student Life
                    </>
                }
                subtitle="Discover a residential environment that balances comfort,
                            discipline, and care — enabling students to focus fully on
                            learning and personal growth."
                primaryCta={{ label: "Apply for 2026-27", href: "/admissions" }}
                secondaryCta={{ label: "Contact Admissions", href: "/contact" }}
            />
        </div>
    )
}
import SmartClassroomCore from "@/components/facillities/smart-classrooms/Core";
import SmartClassroomHero from "@/components/facillities/smart-classrooms/Hero";
import PageCTA from "@/components/ui/PageCTA";

export default function SmartClassroomAndTechnology() {
    return (
        <div>
            <SmartClassroomHero />
            <SmartClassroomCore />
            <PageCTA
                badge="Admissions 2026-27"
                title={
                    <>
                        Experience Smart Learning in a
                        <br className="hidden sm:block" />
                        Future-Ready Academic Environment
                    </>
                }
                subtitle="Join a campus where advanced classroom technology,
              disciplined learning, and experienced faculty come together
              to prepare students for higher education and competitive success."
                primaryCta={{
                    label: "Apply for 2026–27",
                    href: "/admissions",
                }}
                secondaryCta={{
                    label: "Speak to Admissions",
                    href: "/contact",
                }}
            />
        </div>
    )
}
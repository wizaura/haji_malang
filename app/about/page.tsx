import AboutCore from "@/components/about/Core";
import AboutCTA from "@/components/about/CTA";
import AboutHero from "@/components/about/Hero";
import LeadershipVision from "@/components/about/Leadership";
import VisionMission from "@/components/about/Mission";

export default function About() {
    return (
        <div>
            <AboutHero />
            <AboutCore />
            <LeadershipVision />
            <VisionMission />
            <AboutCTA />
        </div>
    )
}
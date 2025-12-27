import {
    Snowflake,
    Monitor,
    Wifi,
    Tv,
    FlaskConical,
    ShieldCheck,
    GraduationCap,
} from "lucide-react";

import FacilityCard from "@/components/ui/FacilitiesCard";

const smartClassroomFeatures = [
    {
        title: "Fully Air-Conditioned Classrooms",
        description:
            "Comfortable, climate-controlled learning spaces that allow students to focus without seasonal distractions.",
        icon: Snowflake,
        image: "/images/facilities/smart-classroom-ac.jpg",
    },
    {
        title: "Digital Boards & AV Learning",
        description:
            "Interactive digital boards and audio-visual tools that simplify complex concepts and improve understanding.",
        icon: Monitor,
        image: "/images/facilities/digital-classroom.jpg",
    },
    {
        title: "High-Speed Internet Connectivity",
        description:
            "Secure, campus-wide internet access enabling academic research and curated digital resources.",
        icon: Wifi,
        image: "/images/facilities/high-speed-internet.jpg",
    },
    {
        title: "Live Learning & TV Integration",
        description:
            "Educational TV facilities and live-streamed lectures extending learning beyond classroom walls.",
        icon: Tv,
        image: "/images/facilities/live-learning.jpg",
    },
    {
        title: "Technology-Enabled Laboratories",
        description:
            "Modern labs supported by digital tools for Physics, Chemistry, Biology, and Computer Science.",
        icon: FlaskConical,
        image: "/images/facilities/tech-lab.jpg",
    },
    {
        title: "Safe & Monitored Digital Environment",
        description:
            "Responsible technology usage with controlled access and academic-only focus.",
        icon: ShieldCheck,
        image: "/images/facilities/secure-campus.jpg",
    },
    {
        title: "Faculty Excellence with Technology",
        description:
            "Experienced faculty integrating technology effectively without replacing mentorship.",
        icon: GraduationCap,
        image: "/images/facilities/faculty-technology.jpg",
    },
];

export default function SmartClassroomsCore() {
    return (
        <section className="bg-white py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="max-w-3xl mb-14">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Smart Classrooms & Technology
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Where Modern Technology Meets
                        <br className="hidden sm:block" />
                        Disciplined Learning
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our smart learning ecosystem blends advanced technology with
                        academic discipline, creating focused, future-ready classrooms.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {smartClassroomFeatures.map((item, index) => (
                        <FacilityCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

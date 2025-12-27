import FacilityCard from "@/components/ui/FacilitiesCard";

import {
    Landmark,
    GraduationCap,
    BookOpen,
    Target,
    Users,
    Flag,
} from "lucide-react";

const civilServicesCore = [
    {
        title: "Early Foundation Program",
        description:
            "A structured foundation inspired by our successful boys’ wing model, nurturing civil service aspirations from an early stage.",
        icon: Target,
        image: "/images/facilities/foundation-program.jpg",
    },
    {
        title: "IAS / IPS Oriented Preparation",
        description:
            "Focused guidance to build awareness, aptitude, and discipline required for India’s premier civil services.",
        icon: Landmark,
        image: "/images/facilities/ias-ips-prep.jpg",
    },
    {
        title: "Leadership & Personality Development",
        description:
            "Training that strengthens confidence, communication skills, ethical decision-making, and leadership qualities.",
        icon: Users,
        image: "/images/facilities/leadership-training.jpg",
    },
    {
        title: "Strong Academic & Conceptual Base",
        description:
            "Emphasis on clarity in academics, current affairs awareness, and analytical thinking.",
        icon: BookOpen,
        image: "/images/facilities/academic-foundation.jpg",
    },
    {
        title: "Mentorship by Experienced Faculty",
        description:
            "Guidance from mentors who understand competitive exam preparation and long-term academic planning.",
        icon: GraduationCap,
        image: "/images/facilities/mentorship.jpg",
    },
    {
        title: "Spirit of National Service",
        description:
            "Instilling a sense of responsibility, integrity, and dedication towards serving the nation.",
        icon: Flag,
        image: "/images/facilities/national-service.jpg",
    },
];

export default function CivilServicesCore() {
    return (
        <section className="bg-white py-14 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="max-w-3xl mb-14">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Civil Services Foundation (IAS / IPS)
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Preparing Young Minds for
                        <br className="hidden sm:block" />
                        Leadership and National Service
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our foundation program nurtures discipline, leadership,
                        academic strength, and social responsibility — laying the
                        groundwork for future civil servants.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {civilServicesCore.map((item, index) => (
                        <FacilityCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

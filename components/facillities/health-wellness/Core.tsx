import PageCTA from "@/components/ui/PageCTA";
import FacilityCard from "@/components/ui/FacilitiesCard";

import {
    Dumbbell,
    Waves,
    TreePine,
    Activity,
    HeartPulse,
} from "lucide-react";

const healthWellnessCore = [
    {
        title: "Modern Gymnasium",
        description:
            "A well-equipped gymnasium encouraging physical fitness, strength, and a healthy daily routine.",
        icon: Dumbbell,
        image: "/images/facilities/gymnasium.jpg",
    },
    {
        title: "Swimming Pool",
        description:
            "A clean and well-maintained swimming pool promoting fitness, confidence, and overall wellbeing.",
        icon: Waves,
        image: "/images/facilities/swimming-pool.jpg",
    },
    {
        title: "Landscaped Parks & Green Spaces",
        description:
            "Beautifully landscaped gardens and open spaces that promote relaxation, reflection, and mental wellbeing.",
        icon: TreePine,
        image: "/images/facilities/landscaped-park.jpg",
    },
    {
        title: "Play Courts & Recreation Areas",
        description:
            "Dedicated play courts and recreational zones supporting teamwork, activity, and balanced campus life.",
        icon: Activity,
        image: "/images/facilities/play-courts.jpg",
    },
    {
        title: "In-House Medical Clinic (24/7)",
        description:
            "An on-campus medical facility with round-the-clock assistance ensuring student health and safety.",
        icon: HeartPulse,
        image: "/images/facilities/medical-clinic.jpg",
    },
];

export default function HealthWellnessCore() {
    return (
            <section className="bg-white py-14 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-14">
                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            Health, Wellness & Recreation
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            Holistic Wellbeing Through
                            <br className="hidden sm:block" />
                            Care, Activity, and Balance
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Physical fitness, mental wellness, and medical care are
                            essential to academic success. Our campus ensures students
                            thrive in a safe, supportive, and active environment.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {healthWellnessCore.map((item, index) => (
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

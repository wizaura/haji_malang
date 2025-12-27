import {
    BookOpen,
    UserCheck,
    HeartHandshake,
    ShieldCheck,
} from "lucide-react";
import { FaMosque } from "react-icons/fa";

import FacilityCard from "@/components/ui/FacilitiesCard";

const islamicValuesCore = [
    {
        title: "Quranic Studies",
        description:
            "Structured Quranic education focusing on correct recitation, understanding, and application in daily life.",
        icon: BookOpen,
        image: "/images/facilities/quranic-studies.jpg",
    },
    {
        title: "Shariah Kitabs & Islamic Curriculum",
        description:
            "Authentic Shariah education through classical and contemporary Islamic texts taught systematically.",
        icon: ShieldCheck,
        image: "/images/facilities/shariah-curriculum.jpg",
    },
    {
        title: "Dedicated Prayer Halls",
        description:
            "Peaceful and well-maintained prayer spaces that nurture spiritual discipline and regular worship.",
        icon: FaMosque,
        image: "/images/facilities/prayer-hall.jpg",
    },
    {
        title: "Shariah Classes by Female Scholars",
        description:
            "Exclusive guidance and instruction by qualified female scholars, ensuring comfort, clarity, and confidence.",
        icon: UserCheck,
        image: "/images/facilities/female-scholars.jpg",
    },
    {
        title: "Faith-Based Character Development",
        description:
            "Moral values, discipline, humility, and responsibility cultivated through Islamic teachings.",
        icon: HeartHandshake,
        image: "/images/facilities/character-development.jpg",
    },
];

export default function IslamicValuesCore() {
    return (
        <section className="bg-white py-14 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="max-w-3xl mb-14">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Islamic Values & Shariah Studies
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Faith at the Core,
                        <br className="hidden sm:block" />
                        Excellence in Every Step
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our approach to education is grounded in Islamic principles, fostering
                        spiritual growth, moral integrity, and academic distinction in a balanced
                        learning environment.
                    </p>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {islamicValuesCore.map((item, index) => (
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

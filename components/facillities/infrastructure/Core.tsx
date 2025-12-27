import PageCTA from "@/components/ui/PageCTA";
import FacilityCard from "@/components/ui/FacilitiesCard";

import {
    Home,
    Wind,
    WashingMachine,
    Utensils,
    ShoppingBag,
    ShieldCheck,
} from "lucide-react";

/* =========================
   INFRASTRUCTURE DATA
========================= */
const infrastructureCore = [
    {
        title: "Fully Air-Conditioned Hostels",
        description:
            "Premium residential hostels with climate-controlled rooms ensuring comfort, rest, and focused living.",
        icon: Wind,
        image: "/images/facilities/ac-hostel.jpg",
    },
    {
        title: "Safe & Comfortable Residential Living",
        description:
            "Well-planned hostel facilities designed to feel like home while maintaining discipline and care.",
        icon: Home,
        image: "/images/facilities/hostel-living.jpg",
    },
    {
        title: "24/7 Laundry Services",
        description:
            "Round-the-clock laundry facilities ensuring cleanliness, convenience, and hygiene for all students.",
        icon: WashingMachine,
        image: "/images/facilities/laundry.jpg",
    },
    {
        title: "Nutritious Dining Facilities",
        description:
            "Wholesome, hygienic meals prepared under strict supervision to support health and wellbeing.",
        icon: Utensils,
        image: "/images/facilities/dining.jpg",
    },
    {
        title: "Haji Malang Mart (In-Campus)",
        description:
            "An on-campus essentials mart providing daily necessities, stationery, and personal items.",
        icon: ShoppingBag,
        image: "/images/facilities/campus-mart.jpg",
    },
    {
        title: "Secure & Well-Managed Campus",
        description:
            "Monitored residential facilities with strict supervision ensuring safety and peace of mind.",
        icon: ShieldCheck,
        image: "/images/facilities/secure-campus.jpg",
    },
];

export default function InfrastructureCore() {
    return (
            <section className="bg-white py-14 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-14">
                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            World-Class Infrastructure
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            A Residential Campus Designed
                            <br className="hidden sm:block" />
                            for Comfort, Care, and Focus
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            From air-conditioned hostels to daily essentials, every
                            aspect of campus living is thoughtfully designed to ensure
                            students feel safe, supported, and at home.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {infrastructureCore.map((item, index) => (
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

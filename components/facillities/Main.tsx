import Link from "next/link";
import {
    Monitor,
    Building2,
    HeartPulse,
    BookOpen,
    Landmark,
    Library,
    ShieldCheck,
    Users,
    Dumbbell,
    Waves,
} from "lucide-react";

import FacilityCard from "@/components/ui/FacilitiesCard";

const facilities = [
    {
        title: "Smart Classrooms & Technology",
        description:
            "Fully air-conditioned smart classrooms with high-speed internet, digital boards, and modern learning tools.",
        href: "/facilities/smart-classrooms",
        icon: Monitor,
        image: "/images/facilities/digital-classroom.jpg",
    },
    {
        title: "World-Class Infrastructure",
        description:
            "Premium residential campus with air-conditioned hostels, dining facilities, laundry services, and campus mart.",
        href: "/facilities/infrastructure",
        icon: Building2,
        image: "/images/facilities/ac-hostel.jpg",
    },
    {
        title: "Health, Wellness & Recreation",
        description:
            "Holistic wellbeing through medical care, fitness spaces, landscaped parks, and recreational courts.",
        href: "/facilities/health-wellness",
        icon: HeartPulse,
        image: "/images/facilities/gymnasium.jpg",
    },
    {
        title: "Islamic Values & Shariah Studies",
        description:
            "Faith-centered education with Quranic studies, Shariah learning, prayer halls, and female scholar guidance.",
        href: "/facilities/islamic-values",
        icon: BookOpen,
        image: "/images/facilities/quranic-studies.jpg",
    },
    {
        title: "Civil Services Foundation (IAS / IPS)",
        description:
            "Early foundation training that nurtures leadership, discipline, and a spirit of national service.",
        href: "/facilities/civil-services",
        icon: Landmark,
        image: "/images/facilities/leadership-training.jpg",
    },
    {
        title: "Library & Research Center",
        description:
            "Expansive library and digital research spaces that promote quiet study, inquiry, and academic excellence.",
        href: "/facilities/library",
        icon: Library,
        image: "/images/facilities/library-books.jpg",
    },

    {
        title: "Swimming Pool",
        description:
            "A modern, well-maintained swimming pool promoting physical fitness, confidence, and relaxation.",
        icon: Waves,
        image: "/images/facilities/swimming-pool.jpg",
    },
    {
        title: "Gymnasium & Fitness Center",
        description:
            "Equipped gymnasium encouraging strength, endurance, and a healthy lifestyle for students.",
        icon: Dumbbell,
        image: "/images/facilities/gymnasium.jpg",
    },
    {
        title: "Secure Campus Environment",
        description:
            "24/7 security, controlled access, and monitored premises ensuring complete safety and peace of mind.",
        icon: ShieldCheck,
        image: "/images/facilities/secure-campus.jpg",
    },
    {
        title: "Student Mentorship & Care",
        description:
            "Dedicated mentoring system focused on academic guidance, emotional wellbeing, and character building.",
        icon: Users,
        image: "/images/facilities/student-mentorship.jpg",
    },
];


export default function FacilitiesPage() {
    return (
        <section id="facilities" className="bg-white py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((item, index) => (
                        <FacilityCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            icon={item.icon}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

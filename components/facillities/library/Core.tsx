import FacilityCard from "@/components/ui/FacilitiesCard";

import {
    Library,
    BookOpen,
    Monitor,
    Search,
    Brain,
    Users,
} from "lucide-react";

const libraryCore = [
    {
        title: "Expansive Library Collection",
        description:
            "A wide collection of academic, reference, and enrichment books supporting curriculum and competitive preparation.",
        icon: Library,
        image: "/images/facilities/library-books.jpg",
    },
    {
        title: "Quiet Study & Reading Spaces",
        description:
            "Calm, distraction-free reading areas designed to promote focus, concentration, and deep study.",
        icon: BookOpen,
        image: "/images/facilities/reading-area.jpg",
    },
    {
        title: "Modern Computer Centers",
        description:
            "Well-equipped computer labs providing access to digital learning tools and academic resources.",
        icon: Monitor,
        image: "/images/facilities/computer-center.jpg",
    },
    {
        title: "Research & Reference Support",
        description:
            "Facilities that encourage independent research, exploration, and critical academic thinking.",
        icon: Search,
        image: "/images/facilities/research-support.jpg",
    },
    {
        title: "Self-Study & Exam Preparation",
        description:
            "Dedicated spaces for self-learning, revision, and focused exam-oriented preparation.",
        icon: Brain,
        image: "/images/facilities/self-study.jpg",
    },
    {
        title: "Guided Academic Assistance",
        description:
            "Supportive guidance from faculty and staff to help students navigate research and academic resources effectively.",
        icon: Users,
        image: "/images/facilities/academic-guidance.jpg",
    },
];

export default function LibraryCore() {
    return (
        <section className="bg-white py-14 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="max-w-3xl mb-14">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Library & Research Center
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        A Space Designed for
                        <br className="hidden sm:block" />
                        Study, Research, and Discovery
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our academic resource centers empower students with
                        knowledge, tools, and guidance — helping them stay ahead
                        in their academic journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {libraryCore.map((item, index) => (
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

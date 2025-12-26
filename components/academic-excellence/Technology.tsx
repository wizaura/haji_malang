import { HiOutlineLightBulb, HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineGroups, MdOutlineSchool } from "react-icons/md";

const methodology = [
    {
        title: "Concept-Driven Teaching",
        description:
            "We emphasize deep conceptual understanding rather than rote learning. Every topic is taught from fundamentals to advanced application, ensuring clarity and long-term retention.",
        icon: <HiOutlineLightBulb />,
    },
    {
        title: "Structured Learning System",
        description:
            "Classes follow a disciplined academic structure with daily schedules, planned syllabi coverage, and regular revision cycles aligned with Pre-University standards.",
        icon: <MdOutlineSchool />,
    },
    {
        title: "Continuous Assessment",
        description:
            "Students are evaluated through weekly tests, periodic assessments, and performance reviews to track progress, identify gaps, and improve academic outcomes.",
        icon: <HiOutlineClipboardCheck />,
    },
    {
        title: "Guided Mentorship",
        description:
            "Small batch focus enables individual attention, doubt-clearing sessions, academic mentoring, and continuous guidance from experienced faculty members.",
        icon: <MdOutlineGroups />,
    },
];

export default function TeachingMethodology() {
    return (
        <section
            id="teaching-methodology"
            className="relative bg-white py-10 sm:py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-8">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Teaching Methodology
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        A Structured Approach to <br className="hidden sm:block" />
                        Academic Excellence
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our teaching methodology is designed to foster clarity, discipline,
                        and academic confidence through a well-structured, student-focused,
                        and exam-oriented learning process.
                    </p>
                </div>

                {/* METHODOLOGY GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

                    {methodology.map((item) => (
                        <div
                            key={item.title}
                            className="group relative rounded-2xl border border-gray-200
                                       bg-gray-50 p-6 sm:p-8 transition
                                       hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-xl
                                               bg-navy text-white text-xl
                                               group-hover:bg-sky group-hover:text-navy transition"
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-navy">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Accent */}
                            <div className="mt-4 h-1 w-12 bg-sky rounded-full" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

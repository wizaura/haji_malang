import {
    HiOutlineChartBar,
    HiOutlineUserGroup,
    HiOutlineClipboardList,
    HiOutlineAcademicCap,
} from "react-icons/hi";

const examFocus = [
    {
        title: "Exam-Oriented Curriculum",
        description:
            "Our academic structure aligns classroom teaching with competitive exam patterns, ensuring students develop problem-solving ability, speed, and conceptual accuracy.",
        icon: <HiOutlineAcademicCap />,
    },
    {
        title: "Regular Testing & Analysis",
        description:
            "Weekly tests, unit-wise assessments, and cumulative evaluations help students track progress and prepare confidently for high-pressure examinations.",
        icon: <HiOutlineClipboardList />,
    },
    {
        title: "Performance Tracking",
        description:
            "Detailed academic monitoring enables early identification of strengths and gaps, allowing focused improvement through guided intervention.",
        icon: <HiOutlineChartBar />,
    },
];

const academicSupport = [
    {
        title: "Individual Academic Mentorship",
        description:
            "Each student receives personalized academic guidance, doubt-clearing support, and mentoring to ensure consistent improvement.",
        icon: <HiOutlineUserGroup />,
    },
    {
        title: "Focused Revision Sessions",
        description:
            "Dedicated revision cycles reinforce concepts, strengthen retention, and improve exam confidence before assessments.",
        icon: <HiOutlineClipboardList />,
    },
    {
        title: "Structured Study Discipline",
        description:
            "A distraction-free environment, supervised study hours, and disciplined schedules create strong academic habits.",
        icon: <HiOutlineAcademicCap />,
    },
];

export default function CompetitiveExamAndSupport() {
    return (
        <section
            id="exam-focus"
            className="relative bg-gray-50 py-10 sm:py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Competitive Exam Focus
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Preparing Students for <br className="hidden sm:block" />
                        Academic Success
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our academic framework prepares students to approach competitive
                        examinations with clarity, confidence, and consistency through
                        disciplined preparation and continuous support.
                    </p>
                </div>

                {/* TWO COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT — COMPETITIVE EXAM FOCUS */}
                    <div>
                        <h3 className="text-2xl font-semibold text-navy mb-6">
                            Competitive Exam Readiness
                        </h3>

                        <div className="space-y-6">
                            {examFocus.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 rounded-xl bg-white border border-gray-200
                                               p-5 hover:shadow-lg transition"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl
                                                    bg-navy text-white text-xl shrink-0">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-navy">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — ACADEMIC SUPPORT */}
                    <div>
                        <h3 className="text-2xl font-semibold text-navy mb-6">
                            Academic Support System
                        </h3>

                        <div className="space-y-6">
                            {academicSupport.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 rounded-xl bg-white border border-gray-200
                                               p-5 hover:shadow-lg transition"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl
                                                    bg-sky text-navy text-xl shrink-0">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-navy">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

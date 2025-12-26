import Link from "next/link";
import ScienceProgramCard from "@/components/ui/ScienceProgramCard";

export default function SciencePrograms() {
    return (
        <section
            id="programs"
            className="relative bg-gray-50 py-10 sm:py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-14">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Science Programs
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Pre-University Science Streams
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our science programs are structured to build strong fundamentals,
                        analytical thinking, and exam readiness for students after
                        10th grade.
                    </p>
                </div>

                {/* PROGRAM CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <ScienceProgramCard
                        badge="PCMB Stream"
                        title="Science with Biology"
                        image="/academics/pcmb.jpg"
                        subjects={[
                            "Physics",
                            "Chemistry",
                            "Mathematics",
                            "Biology",
                        ]}
                        description="Ideal for students aspiring toward medical sciences,
                        pure sciences, research, and allied health fields. The program
                        emphasizes conceptual depth and disciplined study."
                        highlights={[
                            "Strong biology & science foundation",
                            "Exam-oriented academic structure",
                            "Regular assessments & mentoring",
                        ]}
                    />

                    <ScienceProgramCard
                        badge="PCMC Stream"
                        title="Science with Computer Science"
                        image="/academics/pcmc.jpg"
                        subjects={[
                            "Physics",
                            "Chemistry",
                            "Mathematics",
                            "Computer Science",
                        ]}
                        description="Designed for students inclined toward engineering,
                        technology, and computing careers, with emphasis on logic,
                        problem-solving, and analytical thinking."
                        highlights={[
                            "Strong mathematics & logic base",
                            "Technology-aligned curriculum",
                            "Competitive exam readiness",
                        ]}
                    />

                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/admissions"
                        className="inline-flex items-center rounded-full bg-sky px-8 py-4
                                   text-sm font-semibold text-navy hover:bg-skyLight transition shadow-lg"
                    >
                        Apply for Science Programs 2026-27
                    </Link>
                </div>

            </div>
        </section>
    );
}

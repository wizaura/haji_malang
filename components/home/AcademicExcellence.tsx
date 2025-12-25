import Link from "next/link";
import AcademicCard from "../ui/AcademicCard";

export default function AcademicExcellence() {
    return (
        <section className="relative bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-10">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Academic Excellence
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Elevating Scientific Temperament
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Designed for high-achieving students after 10th grade, our
                        Pre-University science programs focus on conceptual clarity,
                        analytical thinking, and competitive exam readiness.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <AcademicCard
                        title="PCMB Stream"
                        badge="PCMB"
                        image="/school/home-as-2.jpg"
                        subjects={[
                            "Physics",
                            "Chemistry",
                            "Mathematics",
                            "Biology",
                        ]}
                        description="Ideal for students aspiring for careers in medicine, engineering, and pure sciences with a strong foundation in theory and application."
                    />

                    <AcademicCard
                        title="PCMC Stream"
                        badge="PCMC"
                        image="/school/home-as-1.jpg"
                        subjects={[
                            "Physics",
                            "Chemistry",
                            "Mathematics",
                            "Computer Science",
                        ]}
                        description="Designed for students inclined towards engineering, technology, and innovation, combining core sciences with computational thinking."
                    />
                </div>

                {/* FOCUS STRIP */}
                <div className="mt-8 rounded-2xl bg-navy px-8 py-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                    <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                        <span className="font-semibold text-skyLight">Our Focus:</span>{" "}
                        Rigorous preparation for competitive examinations supported by
                        experienced faculty and state-of-the-art laboratory facilities.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full bg-sky px-6 py-3 text-sm font-semibold text-navy hover:bg-skyLight transition"
                    >
                        Explore Academics →
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

export default function AcademicExcellenceCore() {
    return (
        <section
            id="academic-excellence"
            className="relative bg-white py-10 sm:py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT – TEXT */}
                    <div className="max-w-xl">

                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            Academic Excellence . Science Stream
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            Building Strong Scientific Foundations
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                            At Haji Malang International Girls Campus, academic excellence
                            is built on clarity of concepts, disciplined learning, and
                            consistent evaluation. Our science programs are designed
                            specifically for students who aim to excel in higher education
                            and competitive examinations.
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            We focus on strengthening fundamentals in Physics, Chemistry,
                            Mathematics, Biology, and Computer Science through structured
                            teaching methods, expert faculty guidance, and a focused
                            academic environment.
                        </p>

                        {/* KEY POINTS */}
                        <ul className="mt-6 space-y-3 text-navy text-sm sm:text-base">
                            <li>• Concept-driven teaching methodology</li>
                            <li>• Structured Pre-University curriculum</li>
                            <li>• Continuous assessment and performance tracking</li>
                            <li>• Competitive exam-oriented academic approach</li>
                        </ul>
                    </div>

                    {/* RIGHT – IMAGE */}
                    <div className="relative">
                        <div className="relative h-[260px] sm:h-[360px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/academics/main.jpg"
                                alt="Academic Excellence"
                                fill
                                className="object-cover"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-navy/10" />
                        </div>

                        {/* Subtle Accent */}
                        <div className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl bg-sky/10 -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}

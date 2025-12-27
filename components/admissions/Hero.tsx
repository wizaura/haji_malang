import Link from "next/link";

export default function AdmissionsHero() {
    return (
        <section className="relative bg-navy py-8 sm:py-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.06] 
                bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
                [background-size:24px_24px]"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Admissions <br className="hidden sm:block" />
                        <span className="text-sky">2026–27</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Take the first step toward a future shaped by academic excellence,
                        discipline, and values. Admissions are now open for a limited
                        number of students into our carefully structured programs.
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-6 space-y-2 text-gray-300 text-sm sm:text-base">
                        <p>• Limited intake for personalised attention</p>
                        <p>• Structured academic & value-based environment</p>
                        <p>• Residential campus with complete student support</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/admissions/apply"
                            className="rounded-full bg-sky px-7 py-3 text-sm font-semibold text-navy
                                       hover:bg-skyLight transition shadow-lg"
                        >
                            Apply Now
                        </Link>

                        <Link
                            href="#admission-process"
                            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white
                                       hover:bg-white/10 transition"
                        >
                            Admission Process
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export default function FacilitiesHero() {
    return (
        <section className="relative bg-navy py-8 sm:py-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Life at Our <br className="hidden sm:block" />
                        <span className="text-sky">Campus</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        A thoughtfully designed residential campus that blends
                        academic excellence, spiritual growth, modern facilities,
                        and holistic wellbeing — creating a secure and inspiring
                        environment for young women to thrive.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/admissions"
                            className="rounded-full bg-sky px-7 py-3 text-sm font-semibold text-navy
                                       hover:bg-skyLight transition shadow-lg"
                        >
                            Admissions 2026–27
                        </Link>

                        <Link
                            href="#facilities"
                            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white
                                       hover:bg-white/10 transition"
                        >
                            Explore Facilities
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

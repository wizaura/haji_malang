import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="relative bg-navy py-20 sm:py-24">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    <span className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5 text-sm font-medium text-skyLight">
                        About the Campus
                    </span>

                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                        A Legacy of Wisdom <br className="hidden sm:block" />
                        and Vision
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Guided by visionary leadership and a deep commitment to education,
                        Haji Malang International Girls Campus stands as more than an
                        institution — it is a foundation for life, character, and purpose.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="rounded-full bg-sky px-7 py-3 text-sm font-semibold text-navy hover:bg-skyLight transition"
                        >
                            Admissions 2026-27
                        </Link>

                        <Link
                            href="#leadership"
                            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                        >
                            Our Leadership
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

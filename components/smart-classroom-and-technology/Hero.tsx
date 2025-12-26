import Link from "next/link";

export default function SmartClassroomHero() {
    return (
        <section className="relative bg-navy py-8 sm:py-12">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Learning Beyond <br className="hidden sm:block text-sky" />
                        <span className="text-sky">Boundaries</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Our smart classrooms are thoughtfully designed to enhance clarity,
                        engagement, and understanding through technology-enabled learning —
                        while maintaining academic discipline and focus.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/admissions"
                            className="rounded-full bg-sky px-7 py-3 text-sm font-semibold text-navy hover:bg-skyLight transition"
                        >
                            Admissions 2026–27
                        </Link>

                        <Link
                            href="#smart-classrooms"
                            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                        >
                            Explore Facilities
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

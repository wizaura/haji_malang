import Link from "next/link";

export default function ClassroomCTA() {
    return (
        <section className="relative bg-navy py-12 sm:py-16 overflow-hidden">

            {/* BACKGROUND ACCENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#38BDF8_3px,transparent_2px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl text-center mx-auto">

                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Take the Next Step in Your Academic Journey
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
                        Admissions for the upcoming academic year are limited and
                        based on academic readiness. Secure your place in a disciplined,
                        value-driven learning environment designed for excellence.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <Link
                            href="/admissions"
                            className="w-full sm:w-auto rounded-full bg-sky px-8 py-4
                                       text-sm font-semibold text-navy
                                       hover:bg-skyLight transition shadow-lg"
                        >
                            Apply for Admission
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto rounded-full border border-white/40
                                       px-8 py-4 text-sm font-medium text-white
                                       hover:bg-white/10 transition"
                        >
                            Speak to Academic Counselors
                        </Link>

                    </div>

                    {/* FOOTNOTE */}
                    <p className="mt-6 text-xs text-gray-300 tracking-wide">
                        Limited seats · Admission subject to academic eligibility
                    </p>
                </div>
            </div>
        </section>
    );
}

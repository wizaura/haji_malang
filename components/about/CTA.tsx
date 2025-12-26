import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="relative bg-navy py-10 sm:py-12 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    <span className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5 text-sm font-medium text-skyLight">
                        Admissions & Enquiries
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Secure Your Future <br className="hidden sm:block" />
                        With Confidence
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
                        Admissions for the Academic Year <span className="font-semibold text-white">2026–27</span>{" "}
                        begin in January 2026. With limited intake to ensure personalized
                        attention, we encourage families to explore the campus and begin
                        their admission journey early.
                    </p>

                    <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
                        Our team is available to guide you through the admission process and
                        answer any questions regarding academics, campus life, or facilities.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/admissions"
                            className="inline-flex items-center justify-center rounded-full
                         bg-sky px-8 py-4 text-sm font-semibold text-navy
                         hover:bg-skyLight transition shadow-lg"
                        >
                            Admissions 2026–27
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full
                         border border-white/40 px-8 py-4 text-sm font-medium text-white
                         hover:bg-white/10 transition"
                        >
                            Contact the Campus
                        </Link>
                    </div>

                    {/* Trust note */}
                    <p className="mt-6 text-sm text-gray-300">
                        * Limited intake to ensure individual attention and holistic development.
                    </p>

                </div>
            </div>
        </section>
    );
}

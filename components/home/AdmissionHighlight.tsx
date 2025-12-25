import Link from "next/link";

export default function AdmissionsHighlight() {
    return (
        <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
            {/* BACKGROUND ACCENTS */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/90" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <span className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-skyLight">
                            Admissions Open
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            Secure Your Child’s <br className="hidden sm:block" />
                            Future Today
                        </h2>

                        <p className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                            Admissions for the <span className="font-semibold text-white">
                                Academic Year 2026–27
                            </span> will begin in January 2026. With limited intake to ensure
                            personalized attention, we encourage early applications.
                        </p>

                        <ul className="mt-6 space-y-2 text-sm text-gray-200">
                            <li>• Limited to 300 students for focused learning</li>
                            <li>• Science stream (PCMB / PCMC)</li>
                            <li>• Residential campus with full facilities</li>
                        </ul>
                    </div>

                    {/* RIGHT CTA CARD */}
                    <div className="relative rounded-xl border border-sky bg-white p-8 shadow-2xl">
                        <h3 className="text-xl font-semibold text-navy">
                            Admissions 2026-27
                        </h3>

                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Begin your admission journey with us and be part of an institution
                            that nurtures excellence, faith, and leadership.
                        </p>

                        <div className="mt-6 space-y-3 text-sm text-gray-700">
                            <p>
                                <span className="font-medium text-navy">Start Date:</span>{" "}
                                January 2026
                            </p>
                            <p>
                                <span className="font-medium text-navy">Location:</span>{" "}
                                Malappuram | Palakkad | Kannur
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/admissions"
                                className="inline-flex justify-center rounded-full bg-navy px-6 py-3
                           text-sm font-semibold text-white hover:bg-navy/90 transition"
                            >
                                Apply for Admission
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

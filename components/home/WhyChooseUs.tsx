import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="relative bg-gray-50 py-12 sm:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-8">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-3 py-1 rounded-full mb-3 text-xs font-medium text-sky">
                        Why Choose Us
                    </span>

                    <h2 className="text-3xl sm:text-3xl font-bold text-navy leading-tight">
                        Excellence Rooted in Values
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                        At Haji Malang International Girls Campus, education goes beyond
                        textbooks—nurturing intellect, faith, discipline, and confidence
                        in a safe and inspiring environment.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-center justify-center">

                        {/* LEFT – SMALL IMAGES */}
                        <div className="flex flex-col gap-4">
                            <div className="relative h-36 rounded-lg overflow-hidden shadow-sm">
                                <Image
                                    src="/school/home-ws-1.jpg"
                                    alt="Academic Excellence"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-navy/15" />
                            </div>

                            <div className="relative h-36 rounded-lg overflow-hidden shadow-sm">
                                <Image
                                    src="/school/home-ws-2.jpg"
                                    alt="Faith Centred Education"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-navy/15" />
                            </div>
                        </div>

                        {/* RIGHT – POINTS */}
                        <div className="relative p-4">
                            <div className="space-y-6 border-l border-sky/30 px-6">

                                <div className="relative">
                                    <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center
                                 rounded-full bg-sky text-navy text-xs font-semibold">
                                        01
                                    </span>
                                    <h3 className="text-lg font-semibold text-navy mb-1">
                                        Strong Academic Foundation
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Focused Pre-University science programs with experienced faculty
                                        and modern laboratories.
                                    </p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center
                                 rounded-full bg-sky text-navy text-xs font-semibold">
                                        02
                                    </span>
                                    <h3 className="text-lg font-semibold text-navy mb-1">
                                        Faith-Centred Learning
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Quranic education, Shariah studies, and disciplined routines
                                        rooted in Islamic values.
                                    </p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center
                                 rounded-full bg-sky text-navy text-xs font-semibold">
                                        03
                                    </span>
                                    <h3 className="text-lg font-semibold text-navy mb-1">
                                        Safe Girls-Only Campus
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        A secure residential environment with 24/7 supervision,
                                        healthcare support, and personal care.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

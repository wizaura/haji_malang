import Image from "next/image";

export default function LeadershipVision() {
    return (
        <section
            id="leadership"
            className="relative bg-gray-50 py-10 sm:py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT – FOUNDER IMAGE */}
                    <div className="relative w-full max-w-md mx-auto lg:mx-0">

                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/about/founder.jpg"   // replace with actual image
                                alt="Sayyid Abdul Rahman Sadat Thangal"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>

                        {/* Image caption */}
                        <div className="mt-4 text-center">
                            <p className="font-semibold text-navy">
                                Sayyid Abdul Rahman Sadat Thangal
                            </p>
                            <p className="text-sm text-gray-500">
                                Visionary Leader & Renowned Scholar
                            </p>
                        </div>

                        {/* Subtle background accent */}
                        <div className="absolute -z-10 -bottom-6 -left-6 h-full w-full rounded-2xl bg-sky/10" />
                    </div>

                    {/* RIGHT – CONTENT */}
                    <div className="max-w-xl">

                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            Leadership & Vision
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            Guided by Wisdom, <br className="hidden sm:block" />
                            Inspired by Purpose
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Under the guidance of the renowned scholar{" "}
                            <span className="font-semibold text-navy">
                                Sayyid Abdul Rahman Sadat Thangal
                            </span>, Haji Malang International Girls Campus was envisioned as a
                            space where education nurtures both intellect and character.
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            The leadership philosophy is rooted in balance — harmonizing modern
                            academic excellence with spiritual grounding, ethical discipline,
                            and social responsibility.
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            This vision empowers young women with confidence, moral clarity,
                            and purpose, enabling them to lead meaningful lives and contribute
                            positively to society and the nation.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

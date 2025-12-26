import Image from "next/image";

export default function AboutCore() {
    return (
        <section className="relative bg-white py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT – TEXT CONTENT */}
                    <div className="max-w-xl">

                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            About the Campus
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            A Legacy of Wisdom <br className="hidden sm:block" />
                            and Vision
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Guided by the renowned scholar{" "}
                            <span className="font-semibold text-navy">
                                Sayyid Abdul Rahman Sadat Thangal
                            </span>, Haji Malang International Girls Campus is more than an academic
                            institution — it is a foundation for life.
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            The campus was envisioned as a space where education nurtures both
                            intellect and character. We believe true learning empowers young
                            women with clarity of purpose, ethical discipline, and confidence.
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            By blending high-standard academic curricula with spiritual growth
                            and personal development, we prepare our students to lead meaningful
                            lives rooted in values and responsibility.
                        </p>

                    </div>

                    {/* RIGHT – IMAGE SPACE */}
                    <div className="relative w-full max-w-md mx-auto lg:mx-0">

                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/about/about-campus.jpg" // replace with your image
                                alt="Haji Malang International Girls Campus"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={false}
                            />
                        </div>

                        {/* Subtle accent */}
                        <div className="absolute -z-10 -bottom-6 -right-6 h-full w-full rounded-2xl bg-sky/10" />

                    </div>

                </div>

            </div>
        </section>
    );
}

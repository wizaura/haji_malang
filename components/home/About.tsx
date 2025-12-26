import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="relative bg-gray-50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                    {/* LEFT IMAGE CARD */}
                    <div className="lg:col-span-3">
                        <div className="group relative h-[200px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 blur-[1px]"
                                style={{
                                    backgroundImage:
                                        "url('/school/home-as-1.jpg')",
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 blur-[1px]"
                                style={{
                                    backgroundImage:
                                        "url('/home-fs-4.jpg')",
                                }}
                            />
                        </div>
                    </div>

                    {/* CENTER MAIN CARD – 50% */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl bg-white p-8 sm:p-10 shadow-lg">

                            <span className="inline-block bg-sky/10 border border-sky/40 px-3 py-2 rounded-full mb-4 text-sm font-medium text-sky">
                                About the Campus
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                                A Legacy of Wisdom <br className="hidden sm:block" />
                                and Vision
                            </h2>

                            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                                Guided by the visionary leadership of{" "}
                                <span className="font-semibold text-navy">
                                    Sayyid Abdul Rahman Sadat Thangal
                                </span>, Haji Malang International Girls Campus is more than an
                                academic institution — it is a foundation for life.
                            </p>

                            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                                We blend high-standard academic curricula with spiritual growth,
                                ethical values, and personal discipline, empowering young women
                                to emerge as confident, capable, and socially responsible
                                leaders of tomorrow.
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-medium text-navy hover:bg-navy hover:text-white transition"
                                >
                                    Learn More About Our Vision →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE CARD */}
                    <div className="lg:col-span-3">
                        <div className="group relative h-[200px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                style={{
                                    backgroundImage:
                                        "url('/school/home-ab-1.jpg')",
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                style={{
                                    backgroundImage:
                                        "url('/school/home-ab-2.jpg')",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

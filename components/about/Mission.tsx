import { HiOutlineEye, HiOutlineFlag } from "react-icons/hi";

export default function VisionMission() {
    return (
        <section className="relative bg-white py-10 sm:py-12 overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Vision & Mission
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Guiding Our Purpose, <br className="hidden sm:block" />
                        Shaping Our Direction
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our vision and mission serve as the foundation that guides every
                        decision, shaping young women into confident leaders grounded in
                        knowledge, faith, and responsibility.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* VISION */}
                    <div className="group relative rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition hover:shadow-xl hover:border-sky hover:-translate-y-1">

                        {/* Icon */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl
                              bg-navy text-white text-2xl shadow-md
                              group-hover:bg-sky group-hover:text-navy transition">
                                <HiOutlineEye />
                            </div>
                            <h3 className="text-2xl font-semibold text-navy">
                                Our Vision
                            </h3>
                        </div>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            To emerge as a center of excellence that nurtures intellectually
                            accomplished, spiritually grounded, and socially responsible
                            women leaders — capable of contributing meaningfully to society,
                            the nation, and the world.
                        </p>

                        {/* Accent line */}
                        <div className="mt-6 h-1 w-16 bg-sky rounded-full" />
                    </div>

                    {/* MISSION */}
                    <div className="group relative rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition hover:shadow-xl hover:border-sky hover:-translate-y-1">

                        {/* Icon */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl
                              bg-navy text-white text-2xl shadow-md
                              group-hover:bg-sky group-hover:text-navy transition">
                                <HiOutlineFlag />
                            </div>
                            <h3 className="text-2xl font-semibold text-navy">
                                Our Mission
                            </h3>
                        </div>

                        <ul className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-sky" />
                                Deliver high-quality academic education that fosters scientific
                                temper, analytical thinking, and excellence.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-sky" />
                                Integrate Islamic values, ethical discipline, and spiritual
                                growth into everyday learning.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-sky" />
                                Provide a safe, supportive, and empowering residential
                                environment for young women.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-sky" />
                                Inspire leadership, service, and lifelong learning with a
                                strong sense of social responsibility.
                            </li>
                        </ul>

                        {/* Accent line */}
                        <div className="mt-6 h-1 w-16 bg-sky rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { FaFemale, FaQuran } from "react-icons/fa";
import { FaMosque, FaHandsPraying } from "react-icons/fa6";

const values = [
    {
        title: "Quranic Education",
        description:
            "Structured Quran studies integrated into daily academic life to strengthen faith and character.",
        icon: <FaQuran />,
    },
    {
        title: "Shariah Studies",
        description:
            "Systematic learning of Shariah Kitabs to guide ethical conduct and spiritual understanding.",
        icon: <FaHandsPraying />,
    },
    {
        title: "Female Scholars",
        description:
            "Dedicated Shariah classes conducted exclusively by qualified female scholars.",
        icon: <FaFemale />,
    },
    {
        title: "Prayer-Centred Campus",
        description:
            "Peaceful prayer halls and a campus environment that nurtures discipline and devotion.",
        icon: <FaMosque />,
    },
];

export default function IslamicValuesPreview() {
    return (
        <section className="relative bg-white py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            Islamic Values
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            Rooted in Faith, Guided by Grace
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Education at Haji Malang International Girls Campus is imparted
                            within a complete Islamic framework, nurturing faith, character,
                            and moral responsibility alongside academic excellence.
                        </p>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/islamic-values"
                        className="inline-flex items-center rounded-full border border-navy px-6 py-3
                       text-sm font-medium text-navy hover:bg-navy hover:text-white transition"
                    >
                        Explore Islamic Studies →
                    </Link>
                </div>

                {/* VALUES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {values.map((item) => (
                        <div
                            key={item.title}
                            className="group relative rounded-xl border border-sky/30 bg-sky/5 p-6
                         transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* ICON */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl
                              bg-navy text-white text-xl mb-4
                              group-hover:bg-sky group-hover:text-navy transition">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-navy">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>

                            {/* ACCENT */}
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-sky scale-x-0
                              group-hover:scale-x-100 origin-left transition-transform" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { FaFemale, FaQuran } from "react-icons/fa";
import { FaMosque, FaHandsPraying } from "react-icons/fa6";

const values = [
    {
        title: "Quranic Education",
        description:
            "Structured Quran studies integrated into daily academic life to strengthen faith and character.",
        icon: <FaQuran />,
        image: "/home/iv-1.jpg",
    },
    {
        title: "Shariah Studies",
        description:
            "Systematic learning of Shariah Kitabs to guide ethical conduct and spiritual understanding.",
        icon: <FaHandsPraying />,
        image: "/home/iv-2.jpg",
    },
    {
        title: "Female Scholars",
        description:
            "Dedicated Shariah classes conducted exclusively by qualified female scholars.",
        icon: <FaFemale />,
        image: "/home/iv-3.jpg",
    },
    {
        title: "Prayer-Centred Campus",
        description:
            "Peaceful prayer halls and a campus environment that nurtures discipline and devotion.",
        icon: <FaMosque />,
        image: "/home/iv-4.jfif",
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
                        href="/"
                        className="inline-flex items-center rounded-full border border-navy px-6 py-3
                       text-sm font-medium text-navy hover:bg-navy hover:text-white transition"
                    >
                        Explore Islamic Studies →
                    </Link>
                </div>

                {/* VALUES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item) => (
                        <div
                            key={item.title}
                            className="group relative rounded-2xl overflow-hidden
                 border border-sky/30 bg-sky/5
                 hover:shadow-xl transition"
                        >
                            {/* IMAGE LAYER */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-0 scale-105
                   group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-700"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div
                                className="absolute inset-0 bg-navy/10
                   opacity-0 group-hover:opacity-100
                   transition duration-700"
                            />

                            {/* CONTENT */}
                            <div className="relative p-6 z-10 transition group-hover:text-white">
                                {/* ICON */}
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-xl
                     bg-navy text-white text-xl mb-4
                     group-hover:bg-sky group-hover:text-navy transition"
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold mb-2 group-hover:opacity-0 transition">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed group-hover:opacity-0 transition">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

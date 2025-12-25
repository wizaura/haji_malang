import Link from "next/link";
import { BiCart, BiLaptop, BiShield } from "react-icons/bi";
import { BsHospital, BsHouse } from "react-icons/bs";
import { PiBooks } from "react-icons/pi";

const facilities = [
    {
        title: "Smart Classrooms",
        description:
            "Fully air-conditioned, technology-enabled classrooms with digital learning tools.",
        icon: <BiLaptop />,
        image:
            "/Pattadi-school/KSU06037.jpg",
    },
    {
        title: "Residential Hostels",
        description:
            "Premium, fully air-conditioned hostels with 24/7 supervision and care.",
        icon: <BsHouse />,
        image:
            "/Pattadi-school/KSU06030.jpg",
    },
    {
        title: "Health & Wellness",
        description:
            "Gymnasium, swimming pool, landscaped parks, and 24/7 medical support.",
        icon: <BsHospital />,
        image:
            "/Pattadi-school/KSU06023.jpg",
    },
    {
        title: "Library & Research",
        description:
            "Extensive library and modern computer labs for focused study and research.",
        icon: <PiBooks />,
        image:
            "/Pattadi-school/KSU06006.jpg",
    },
    {
        title: "Campus Convenience",
        description:
            "Nutritious dining, laundry services, and in-campus Haji Malang Mart.",
        icon: <BiCart />,
        image:
            "/Pattadi-school/KSU05958.jpg",
    },
    {
        title: "Safe & Secure Campus",
        description:
            "Monitored, disciplined, and secure environment designed exclusively for girls.",
        icon: <BiShield />,
        image:
            "/Pattadi-school/KSU05918.jpg",
    },
];

export default function FacilitiesPreview() {
    return (
        <section className="relative bg-gray-50 py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">

                    {/* LEFT TEXT */}
                    <div className="max-w-3xl">
                        <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                            Campus Facilities
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                            Comfort That Feels Like Home
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Our campus is thoughtfully designed to provide a safe, comfortable,
                            and inspiring environment where students can learn, grow, and thrive.
                        </p>
                    </div>

                    {/* CTA RIGHT */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-full border border-navy px-6 py-3
                 text-sm font-medium text-navy hover:bg-navy hover:text-white transition"
                        >
                            View All Facilities →
                        </Link>
                    </div>

                </div>


                {/* FACILITY GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {facilities.map((item) => (
                        <div
                            key={item.title}
                            className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 transition
               hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* IMAGE */}
                            <div className="relative h-40 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                     group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 relative">
                                {/* ICON */}
                                <div className="absolute -top-6 left-6 flex items-center justify-center
                        w-12 h-12 rounded-xl border border-white bg-navy text-white text-xl shadow-lg">
                                    {item.icon}
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-navy">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* ACCENT STRIP */}
                            <div className="h-1 w-full bg-sky" />
                        </div>
                    ))}


                </div>

            </div>
        </section>
    );
}

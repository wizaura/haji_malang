import {
    HiOutlineDesktopComputer,
    HiOutlineWifi,
    HiOutlinePresentationChartLine,
} from "react-icons/hi";

const features = [
    {
        title: "Smart Teaching Aids",
        description:
            "Interactive boards, visual presentations, and guided digital content simplify complex concepts.",
        icon: <HiOutlinePresentationChartLine />,
        image: "/home-fs-1.jpg",
    },
    {
        title: "Digital Learning Support",
        description:
            "Recorded lessons, digital notes, and academic tools support revision and self-paced learning.",
        icon: <HiOutlineDesktopComputer />,
        image: "/home-fs-1.jpg",
    },
    {
        title: "High-Speed Internet & IT Support",
        description:
            "Secure high-speed connectivity with monitored access and dedicated technical support.",
        icon: <HiOutlineWifi />,
        image: "/home-fs-1.jpg",
    },
];

export default function SmartClassroomCore() {
    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-12">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Smart Classrooms & Technology
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                        Technology That Enhances Learning
                    </h2>

                    <p className="mt-4 text-gray-700 text-lg">
                        Focused classrooms powered by modern technology to improve clarity,
                        discipline, and academic outcomes.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 hover:shadow-xl transition"
                        >
                            {/* IMAGE LAYER */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-0 scale-105
                                           group-hover:opacity-100 group-hover:scale-100
                                           transition-all duration-700"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-navy/70 group-hover:bg-transparent opacity-0 group-hover:opacity-100 transition" />

                            {/* CONTENT */}
                            <div className="relative p-6 z-10 group-hover:text-white transition">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white text-xl mb-4 group-hover:bg-sky group-hover:text-navy transition">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold mb-2 group-hover:opacity-0">
                                    {item.title}
                                </h3>

                                <p className="text-sm sm:text-base leading-relaxed group-hover:opacity-0">
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
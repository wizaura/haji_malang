import Image from "next/image";

type ScienceProgramCardProps = {
    badge: string;
    title: string;
    subjects: string[];
    description: string;
    highlights: string[];
    image: string;
};

export default function ScienceProgramCard({
    badge,
    title,
    subjects,
    description,
    highlights,
    image,
}: ScienceProgramCardProps) {
    return (
        <div className="relative rounded-2xl bg-white border border-gray-200
                        overflow-hidden shadow-sm hover:shadow-xl transition">

            {/* IMAGE */}
            <div className="relative h-40">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/30" />
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-6">
                <span className="inline-block mb-2 text-sm font-semibold text-sky">
                    {badge}
                </span>

                <h3 className="text-2xl font-bold text-navy mb-3">
                    {title}
                </h3>

                <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm sm:text-base mb-4">
                    {subjects.map((sub) => (
                        <li key={sub}>• {sub}</li>
                    ))}
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                    {description}
                </p>

                <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700 space-y-2">
                    {highlights.map((point) => (
                        <p key={point}>✔ {point}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

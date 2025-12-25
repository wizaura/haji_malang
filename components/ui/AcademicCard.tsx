type AcademicCardProps = {
    title: string;
    subjects: string[];
    description: string;
    image: string;
    badge: string;
};

export default function AcademicCard({
    title,
    subjects,
    description,
    image,
    badge,
}: AcademicCardProps) {
    return (
        <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:shadow-2xl hover:-translate-y-1">

            {/* sm + md: column | lg: row */}
            <div className="flex flex-row md:flex-col lg:flex-row h-full">

                {/* IMAGE */}
                <div className="relative w-3/5 md:w-full h-56 md:h-64 lg:h-auto lg:w-2/5 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/40 to-transparent" />

                    {/* BADGE */}
                    <span className="absolute top-4 left-4 bg-navy border border-sky text-sky text-xs font-semibold px-3 py-1 rounded-full">
                        {badge}
                    </span>
                </div>

                {/* CONTENT */}
                <div className="relative w-full lg:w-3/5 p-4 md:p-6 flex flex-col justify-center">

                    {/* ACCENT LINE */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-sky hidden lg:block" />

                    <h3 className="text-xl font-semibold text-navy mb-4">
                        {title}
                    </h3>

                    <ul className="grid grid-cols-2 gap-x-1 sm:gap-x-4 gap-y-1 text-navy text-sm font-semibold">
                        {subjects.map((sub) => (
                            <li key={sub}>• {sub}</li>
                        ))}
                    </ul>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

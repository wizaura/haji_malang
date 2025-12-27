import Image from "next/image";

const leaders = {
    founder: {
        name: "Sayyid Abdul Rahman Sadath Thangal",
        role: "Founder & CEO",
        image: "/about/founder.jpeg",
    },
    board: [
        {
            name: "Shaik Ayub Ahmed",
            role: "Prop – AASCO Steel Trading",
            image: "/about/board-ayub.jpeg",
        },
        {
            name: "Usman Sharief",
            role: "CEO – Hamadi Al-Jubail Manufacturing Co.",
            image: "/about/board-usman.jpeg",
        },
    ],
    managingDirector: {
        name: "Muhammad Shareef Saquafi Mani",
        role: "Managing Director",
        image: "/about/md.jpeg",
    },
    ambassador: {
        name: "Sayyed Shamshuddeen Sabith",
        role: "Global Ambassador",
        image: "/about/ambassador.jpeg",
    },
};

function PersonCard({
    name,
    role,
    image,
    variant = "neutral",
}: {
    name: string;
    role: string;
    image: string;
    variant?: "gold" | "silver" | "bronze" | "neutral";
}) {
    const styles = {
        gold: {
            card: "border-yellow-400/40 bg-yellow-50/40 shadow-md",
            ring: "border-yellow-400/60",
            bar: "bg-yellow-400",
        },
        silver: {
            card: "border-gray-300 bg-gray-50 shadow-sm",
            ring: "border-gray-300",
            bar: "bg-gray-300",
        },
        bronze: {
            card: "border-amber-700/30 bg-amber-50/30 shadow-sm",
            ring: "border-amber-700/40",
            bar: "bg-amber-700/60",
        },
        neutral: {
            card: "border-gray-200 bg-white shadow-sm",
            ring: "border-gray-200",
            bar: "",
        },
    };

    const s = styles[variant];

    return (
        <div
            className={`w-[220px] flex flex-col items-center text-center rounded-2xl border
            ${s.card}
            px-5 py-6 transition hover:shadow-lg`}
        >
            {/* IMAGE */}
            <div
                className={`relative w-28 h-28 rounded-full overflow-hidden border ${s.ring}`}
            >
                <Image src={image} alt={name} fill className="object-cover" />
            </div>

            {/* TEXT */}
            <h4 className="mt-4 text-sm font-semibold text-navy leading-tight">
                {name}
            </h4>

            <p className="mt-1 text-xs text-gray-600">
                {role}
            </p>

            {/* ACCENT BAR */}
            {variant !== "neutral" && (
                <div className={`mt-4 h-1 w-10 rounded-full ${s.bar}`} />
            )}
        </div>
    );
}



export default function LeadershipTreeHorizontal() {
    return (
        <section className="bg-gray-50 py-10 sm:py-14">
            <div className="absolute inset-x-0 top-32 h-40 bg-navy/5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-10">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Leadership Structure
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                        Governance & Visionary Leadership
                    </h2>

                    <p className="mt-4 text-gray-700 text-lg">
                        A horizontally structured leadership framework for clarity,
                        accountability, and vision-driven governance.
                    </p>
                </div>

                {/* HORIZONTAL TREE */}
                <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* FOUNDER */}
                    <div className="flex justify-center">
                        <PersonCard {...leaders.founder} variant="gold" />
                    </div>

                    {/* BOARD */}
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-sm uppercase tracking-wide text-gray-500 font-bold">
                            Board of Directors
                        </span>

                        <div className="flex flex-col sm:flex-row gap-6">
                            {leaders.board.map((person) => (
                                <PersonCard key={person.name} {...person} variant="silver" />
                            ))}
                        </div>
                    </div>

                    {/* MANAGING DIRECTOR + AMBASSADOR */}
                    <div className="flex flex-col items-center gap-4 lg:col-span-2">
                        <div className="flex flex-col items-center sm:flex-row gap-6">
                            <div className="flex justify-center">
                                <PersonCard {...leaders.managingDirector} variant="bronze" />
                            </div>

                            <div className="flex justify-center">
                                <PersonCard {...leaders.ambassador} variant="bronze" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

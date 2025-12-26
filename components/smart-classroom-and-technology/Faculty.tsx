import Image from "next/image";

export default function FacultyAndDiscipline() {
    return (
        <section
            id="faculty-environment"
            className="relative bg-gray-50 py-12 sm:py-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-12">
                    <span className="inline-block bg-sky/10 border border-sky/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-sky">
                        Faculty & Learning Environment
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                        Discipline Led by Experience,<br className="hidden sm:block" />
                        Learning Guided by Technology
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our academic environment is built on strong faculty leadership,
                        disciplined classroom culture, and the responsible use of
                        educational technology to maximize student focus and outcomes.
                    </p>
                </div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT – IMAGES */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/academics/faculty-1.jpg"
                                alt="Faculty Guided Classroom"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-navy/20" />
                        </div>

                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/academics/faculty-2.jpg"
                                alt="Disciplined Learning Environment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-navy/20" />
                        </div>
                    </div>

                    {/* RIGHT – CONTENT */}
                    <div className="space-y-8">

                        {/* POINT 1 */}
                        <div className="relative pl-6 border-l-2 border-sky/40">
                            <h3 className="text-xl font-semibold text-navy mb-2">
                                Experienced & Dedicated Faculty
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our faculty members bring deep subject expertise, mentoring
                                experience, and a strong commitment to academic discipline.
                                Each class is structured, goal-driven, and continuously
                                monitored for student progress.
                            </p>
                        </div>

                        {/* POINT 2 */}
                        <div className="relative pl-6 border-l-2 border-sky/40">
                            <h3 className="text-xl font-semibold text-navy mb-2">
                                Structured Classroom Discipline
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                A calm, respectful, and focused classroom culture is
                                maintained through clear academic routines, attentive
                                supervision, and a learning-first mindset that minimizes
                                distractions.
                            </p>
                        </div>

                        {/* POINT 3 */}
                        <div className="relative pl-6 border-l-2 border-sky/40">
                            <h3 className="text-xl font-semibold text-navy mb-2">
                                Faculty–Technology Integration
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Technology is used as a teaching aid — not a replacement.
                                Faculty members integrate digital tools, visual explanations,
                                and recorded academic resources to reinforce learning while
                                preserving personal teacher–student interaction.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

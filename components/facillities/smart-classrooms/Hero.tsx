import Link from "next/link";

export default function SmartClassroomHero() {
    return (
        <section className="relative bg-navy py-8 sm:py-12">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Learning Beyond <br className="hidden sm:block text-sky" />
                        <span className="text-sky">Boundaries</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Our campus features fully air-conditioned, tech-enabled smart classrooms. With high-speed internet and TV facilities, we connect our students to global knowledge while maintaining a focused learning environment.
                    </p>
                </div>
            </div>
        </section>
    );
}

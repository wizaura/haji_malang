export default function HealthWellnessHero() {
    return (
        <section className="relative bg-navy py-12 sm:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Nurturing Mind, <br className="hidden sm:block" />
                        <span className="text-sky">Body, and Soul</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        A healthy body supports a focused mind and a balanced life.
                        Our campus provides thoughtfully designed wellness and
                        recreational facilities that support holistic student growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
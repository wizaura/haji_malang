export default function InfrastructureHero() {
    return (
        <section className="relative bg-navy py-12 sm:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Comfort that Feels <br className="hidden sm:block" />
                        <span className="text-sky">Like Home</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Our world-class infrastructure offers a premium residential
                        experience where comfort, care, and discipline come together
                        to support academic and personal growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
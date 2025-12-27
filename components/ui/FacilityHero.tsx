import Link from "next/link";
import { ReactNode } from "react";

interface FacilityHeroProps {
    title: ReactNode;
    highlight?: ReactNode;
    description?: ReactNode;
    showBack?: boolean;
}

export default function FacilityHero({
    title,
    highlight,
    description,
    showBack = true,
}: FacilityHeroProps) {
    return (
        <section className="relative bg-navy py-12 sm:py-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">

                    {/* Back Button */}
                    {showBack && (
                        <Link
                            href="/facilities"
                            className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-skyLight
                                        hover:text-sky transition"
                        >
                            ← Back to Facilities
                        </Link>
                    )}

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        {title}
                        {highlight && (
                            <>
                                <br className="hidden sm:block" />
                                <span className="text-sky">{highlight}</span>
                            </>
                        )}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

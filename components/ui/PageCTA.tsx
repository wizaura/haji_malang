import Link from "next/link";
import { ReactNode } from "react";

interface CTAButton {
    label: string;
    href: string;
}

interface PageCTAProps {
    badge?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    primaryCta?: CTAButton | null;
    secondaryCta?: CTAButton | null;
}

export default function PageCTA({
    badge = "Admissions Open",
    title,
    subtitle,
    primaryCta = {
        label: "Apply Now",
        href: "/admissions",
    },
    secondaryCta = {
        label: "Contact Us",
        href: "/contact",
    },
}: PageCTAProps) {
    return (
        <section className="relative bg-navy/90 py-10 sm:py-12 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#38BDF8_3px,transparent_2px)] [background-size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">

                {/* Badge */}
                {badge && (
                    <span className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5 text-sm font-medium text-skyLight">
                        {badge}
                    </span>
                )}

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {title}
                </h2>

                {/* Subtitle */}
                {subtitle && (
                    <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {primaryCta && (
                        <Link
                            href={primaryCta.href}
                            className="rounded-full bg-sky px-8 py-4 text-sm font-semibold text-navy
                                        hover:bg-skyLight transition shadow-xl"
                        >
                            {primaryCta.label}
                        </Link>
                    )}

                    {secondaryCta && (
                        <Link
                            href={secondaryCta.href}
                            className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white
                                        hover:bg-white/10 transition"
                        >
                            {secondaryCta.label}
                        </Link>
                    )}
                </div>

            </div>
        </section>
    );
}

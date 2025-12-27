import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";

interface FacilityCardProps {
    title: string;
    description: string;
    image: string;
    icon?: ElementType;
    href?: string;
}

export default function FacilityCard({
    title,
    description,
    image,
    icon: Icon,
    href,
}: FacilityCardProps) {
    return (
        <div
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white
            shadow-sm transition-all duration-300
            hover:shadow-xl hover:-translate-y-1"
        >
            {/* IMAGE */}
            <div className="relative h-44 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500
                    group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

                {Icon && (
                    <div
                        className="absolute bottom-4 left-4 inline-flex h-12 w-12
                        items-center justify-center rounded-xl bg-sky text-navy shadow-lg"
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                )}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col p-6 h-full">
                <h3 className="text-lg font-semibold text-navy mb-2">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* CTA */}
                {href && (
                    <Link
                        href={href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-navy
                    hover:text-sky transition-colors"
                    >
                        Explore more →
                    </Link>
                )}

            </div>
        </div>
    );
}

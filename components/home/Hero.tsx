"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
    "/hero-2.jpg",
    "/hero-6.jpg",
    "/hero-4.jpg",
    "/hero-5.jpg",
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const year = new Date().getFullYear() + 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[70vh] sm:min-h-[76vh] w-full overflow-hidden pt-10">

            {/* SLIDES */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-navy/60" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="
            max-w-5xl text-white
            text-center sm:text-left
            mx-auto sm:mx-0
            sm:ml-6 lg:ml-12
          ">

                        {/* ADMISSIONS BADGE */}
                        <span className="inline-block my-3 rounded-full border border-white/40 bg-navy/40 px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium text-navyLight">
                            Admissions Opening · January {year}
                        </span>

                        <h1
                            className="
    mt-2 font-extrabold leading-tight
    text-2xl sm:text-3xl md:text-3xl lg:text-4xl
  "
                        >
                            Welcome to <br />
                            <span className="text-sky text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
                                Haji Malang International Girls Campus
                            </span>
                        </h1>


                        <p
                            className="
    mt-6 sm:mt-7
    text-base sm:text-md md:text-lg
    text-gray-200 leading-relaxed font-medium
    max-w-2xl mx-auto sm:mx-0
  "
                        >
                            A welcoming space dedicated to learning, growth, and values, where young
                            women are encouraged to explore their potential, develop confidence, and
                            build a strong foundation for higher education and a purposeful future.
                        </p>

                        {/* CTA */}
                        <div className="
              mt-10 sm:mt-12
              flex flex-col sm:flex-row
              items-center sm:items-start
              gap-4 sm:gap-5
            ">
                            <Link
                                href="/"
                                className="w-full sm:w-auto text-center rounded-full  border-2 border-white/50 bg-sky px-2 sm:px-4 py-2 sm:py-3 text-navy font-semibold shadow-lg hover:bg-skyLight hover:shadow-xl transition"
                            >
                                Secure your seat
                            </Link>

                            <Link
                                href="/about"
                                className="w-full sm:w-auto text-center rounded-full border-2 border-white/50 px-2 sm:px-4 py-2 sm:py-3 font-medium text-white hover:bg-navy hover:border-white transition"
                            >
                                Explore the Campus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM GRADIENT */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-navy to-transparent" />
        </section>
    );
}

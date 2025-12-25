"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [applyOpen, setApplyOpen] = useState(false);

    const navLinks = [
        ["Home", "/"],
        ["About", "/about"],
        ["Academics", "/academics"],
        ["Campus Life", "/campus-life"],
        ["Facilities", "/facilities"],
        ["Admissions", "/admissions"],
        ["Contact", "/contact"],
    ];

    return (
        <header className="w-full">
            {/* TOP INFO BAR */}
            {/* TOP INFO BAR */}
            <div className="bg-navy text-gray-200 text-xs">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

                    {/* LEFT INFO */}
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <HiOutlinePhone className="text-sky text-sm" />
                            <span className="hidden sm:inline">+91 7510 22 8881</span>
                        </span>

                        <span className="hidden md:flex items-center gap-1.5">
                            <HiOutlineMail className="text-sky text-sm" />
                            <span>info@hajimalangcampus.com</span>
                        </span>

                        <span className="hidden lg:flex items-center gap-1.5">
                            <HiOutlineLocationMarker className="text-sky text-sm" />
                            <span>Malappuram · Palakkad · Kannur</span>
                        </span>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="hidden sm:block text-skyLight text-xs tracking-wide">
                        Empowering Futures Since 1890
                    </div>
                </div>
            </div>


            {/* MAIN NAVBAR */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={"/logo.png"}
                            alt="Logo"
                            width={200}
                            height={30}
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-8 font-medium text-gray-700">
                            {navLinks.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="relative hover:text-navy transition
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-sky
                    hover:after:w-full after:transition-all"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* APPLY BUTTON */}
                        <button
                            onClick={() => setApplyOpen(!applyOpen)}
                            className="rounded-full border border-sky px-5 py-2 text-sm font-medium text-navy hover:bg-sky hover:text-white transition"
                        >
                            Apply
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden text-navy"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <nav className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
                            {navLinks.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-navy transition"
                                >
                                    {label}
                                </Link>
                            ))}

                            <button
                                onClick={() => {
                                    setApplyOpen(!applyOpen);
                                    setMenuOpen(false);
                                }}
                                className="mt-2 rounded-full border border-sky px-5 py-2 text-sm font-medium text-navy hover:bg-sky hover:text-white transition w-fit"
                            >
                                Apply
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

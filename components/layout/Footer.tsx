import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-navy text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 pb-3">
                            <Image
                                src={"/logo.png"}
                                alt="Logo"
                                width={200}
                                height={30}
                            />
                        </Link>

                        <p className="text-sm leading-relaxed text-gray-400">
                            A residential educational institution dedicated to nurturing
                            academic excellence, Islamic values, and confident women leaders
                            of tomorrow.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="mt-5 flex items-center gap-3">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaYoutube />, href: "#" },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className="flex h-9 w-9 items-center justify-center rounded-full
                             bg-white/10 text-white hover:bg-sky hover:text-navy transition"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-sky transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-sky transition">About</Link></li>
                            <li><Link href="/academics" className="hover:text-sky transition">Academics</Link></li>
                            <li><Link href="/facilities" className="hover:text-sky transition">Facilities</Link></li>
                            <li><Link href="/admissions" className="hover:text-sky transition">Admissions</Link></li>
                            <li><Link href="/contact" className="hover:text-sky transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* ACADEMICS */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">
                            Academics
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>PCMB (Science)</li>
                            <li>PCMC (Science)</li>
                            <li>Competitive Exam Prep</li>
                            <li>Islamic Studies</li>
                            <li>Shariah Education</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">
                            Contact Us
                        </h4>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <HiOutlineLocationMarker className="mt-0.5 text-sky text-base" />
                                <span>Adresss
                                    Moodbidre,<br />
                                    Pattadi, Post Perinje
                                    Belthangady Dk<br />
                                    Karnataka -574197</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <HiOutlinePhone className="text-sky text-base" />
                                <span>+91 76250 97336</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <HiOutlineMail className="text-sky text-base" />
                                <span>info@hajimalangcampus.com</span>
                            </li>
                        </ul>

                        <Link
                            href="/contact"
                            className="inline-block mt-5 rounded-full border border-sky px-5 py-2
                         text-sm font-medium text-sky hover:bg-sky hover:text-navy transition"
                        >
                            Get in Touch →
                        </Link>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-10 h-px bg-white/10" />

                {/* BOTTOM BAR */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Haji Malang International Girls Campus.
                        All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-sky transition">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-sky transition">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

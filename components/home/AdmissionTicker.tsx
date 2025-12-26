import { HiAcademicCap } from "react-icons/hi2";

export default function AdmissionsTicker() {
    return (
        <div className="relative overflow-hidden bg-navy border-t border-white/10">
            <div className="flex items-center whitespace-nowrap animate-marquee py-3">

                {/* REPEAT CONTENT FOR SEAMLESS LOOP */}
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 mx-10 text-skyLight text-sm sm:text-base font-medium"
                    >
                        <HiAcademicCap className="text-sky text-lg" />
                        <span>
                            Admissions Open for <strong>2025–26</strong>
                        </span>
                        <span className="text-white/50">|</span>
                        <span className="text-white">
                            Limited Seats Available
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

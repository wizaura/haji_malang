"use client";

export default function AdmissionsForm() {
    return (
        <div
            className="
                bg-white rounded-2xl border border-gray-200 shadow-xl
                p-6 sm:p-8
                lg:sticky lg:top-14
            "
        >
            <h3 className="text-2xl font-bold text-navy mb-2">
                Registration - 2025
            </h3>

            <p className="text-sm text-gray-600 mb-6">
                Fill out this form and our admissions team will guide you through
                the next steps.
            </p>

            <form className="space-y-4">

                <input
                    type="text"
                    placeholder="Name of Student"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky outline-none"
                />

                <input
                    type="text"
                    placeholder="District"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky outline-none"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky outline-none"
                />

                <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky outline-none"
                />

                <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky outline-none">
                    <option>Course</option>
                    <option>PCMB</option>
                    <option>PCMC</option>
                </select>

                <button
                    type="submit"
                    className="w-full rounded-full bg-navy py-3 text-white font-semibold hover:bg-navy/90 transition"
                >
                    Submit Registration
                </button>

            </form>
        </div>
    );
}

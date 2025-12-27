export default function AdmissionsDescription() {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-8">

            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Admission Guidelines & Procedure
            </h2>

            {/* INTRO */}
            <p className="text-gray-700 leading-relaxed">
                Admissions at Haji Malang International Girls Campus follow a
                structured and transparent process to ensure every student
                receives the right guidance and support from the very beginning.
            </p>

            {/* GUIDELINES */}
            <div>
                <h3 className="font-semibold text-navy mb-2">
                    Mandatory Documents
                </h3>
                <p className="text-gray-700 mb-3">
                    Parents are requested to bring the following documents at
                    the time of admission:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Birth Certificate of the student</li>
                    <li>Aadhaar Card</li>
                    <li>Two recent passport-size photographs</li>
                </ul>
            </div>

            {/* CAMPUS ADMISSION STEPS */}
            <div>
                <h3 className="font-semibold text-navy mb-3">
                    Campus Admission Steps
                </h3>

                <ol className="space-y-3 text-gray-700">
                    <li>
                        <strong>Step 1:</strong> Visit the campus and collect the
                        official admission form.
                    </li>
                    <li>
                        <strong>Step 2:</strong> Submit the completed application
                        form to the admissions office.
                    </li>
                    <li>
                        <strong>Step 3:</strong> Carefully read and understand
                        the fee structure and affidavit before signing.
                    </li>
                    <li>
                        <strong>Step 4:</strong> Contact the transportation
                        coordinator to confirm the availability of transport
                        services in your area.
                    </li>
                    <li>
                        <strong>Step 5:</strong> Confirm admission by paying the
                        required amount to the designated account. This amount
                        will be adjusted as the first-term fee.
                    </li>
                </ol>
            </div>

            {/* ADMISSION PROCEDURE */}
            <div>
                <h3 className="font-semibold text-navy mb-3">
                    Admission Procedure
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Securing a place at Haji Malang International Girls Campus is
                    a simple and guided process designed to identify students
                    who are ready to embrace disciplined learning, strong values,
                    and academic excellence.
                </p>

                <ol className="space-y-3 text-gray-700">
                    <li>
                        <strong>Initial Inquiry & Counseling:</strong> Begin by
                        connecting with our admissions team via WhatsApp or phone.
                        We will provide detailed information about programs,
                        fees, facilities, and campus life.
                    </li>
                    <li>
                        <strong>Registration:</strong> Complete the official
                        registration process as guided by our admissions team.
                        This helps us understand the student’s academic
                        background and aspirations.
                    </li>
                    <li>
                        <strong>Academic Interaction:</strong> Eligible students
                        may be invited for an academic interaction or assessment
                        to ensure readiness for our Pre-University programs.
                    </li>
                    <li>
                        <strong>Admission Offer & Enrollment:</strong> Selected
                        candidates will receive an admission confirmation.
                        Upon completion of documentation and fee payment, the
                        seat will be officially secured.
                    </li>
                </ol>
            </div>

        </div>
    );
}

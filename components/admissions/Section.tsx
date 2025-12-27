import AdmissionsDescription from "./Description";
import AdmissionsForm from "./Form";

export default function AdmissionsSection() {
    return (
        <section className="bg-gray-50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT CONTENT */}
                    <AdmissionsDescription />

                    {/* RIGHT FORM */}
                    <AdmissionsForm />

                </div>

            </div>
        </section>
    );
}

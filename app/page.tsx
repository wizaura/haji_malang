import AboutSection from "@/components/home/About";
import AcademicExcellence from "@/components/home/AcademicExcellence";
import AdmissionsHighlight from "@/components/home/AdmissionHighlight";
import AdmissionsTicker from "@/components/home/AdmissionTicker";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import HeroSection from "@/components/home/Hero";
import IslamicValuesPreview from "@/components/home/IslamicValues";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AdmissionsTicker />
      <AboutSection />
      <AcademicExcellence />
      <FacilitiesPreview />
      <IslamicValuesPreview />
      <WhyChooseUs />
      <AdmissionsHighlight />
    </div>
  );
}

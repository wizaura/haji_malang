import AcademicExcellenceCore from "@/components/academic-excellence/Core";
import AcademicCTA from "@/components/academic-excellence/CTA";
import CompetitiveExamAndSupport from "@/components/academic-excellence/Exam";
import AcademicsHero from "@/components/academic-excellence/Hero";
import SciencePrograms from "@/components/academic-excellence/Programs";
import TeachingMethodology from "@/components/academic-excellence/Technology";

export default function AcademicExcellence() {
    return (
        <div>
            <AcademicsHero />
            <AcademicExcellenceCore />
            <SciencePrograms />
            <TeachingMethodology />
            <CompetitiveExamAndSupport />
            <AcademicCTA />
        </div>
    )
}
import SmartClassroomCore from "@/components/smart-classroom-and-technology/Core";
import ClassroomCTA from "@/components/smart-classroom-and-technology/CTA";
import FacultyAndDiscipline from "@/components/smart-classroom-and-technology/Faculty";
import SmartClassroomHero from "@/components/smart-classroom-and-technology/Hero";

export default function SmartClassroomAndTechnology() {
    return (
        <div>
            <SmartClassroomHero />
            <SmartClassroomCore />
            <FacultyAndDiscipline />
            <ClassroomCTA />
        </div>
    )
}
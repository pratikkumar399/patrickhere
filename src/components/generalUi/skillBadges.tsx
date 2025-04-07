import { Badge } from "@/components/ui/badge";


const skills = [
    "React",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker"
]

function SkillBadges() {
    return (
        <div className="flex flex-wrap gap-4">
            {
                skills.map((skill, index) => (
                    <Badge key={index} className="bg-gray-200 text-black" variant="secondary">
                        {skill}
                    </Badge>
                ))
            }
        </div>
    );
}

export { SkillBadges };
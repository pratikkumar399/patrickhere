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
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="group px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl hover:border-[#333] hover:bg-[#111] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-sm">
                        {skill}
                    </span>
                </div>
            ))}
        </div>
    );
}

export { SkillBadges };
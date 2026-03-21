import CardComponent from "@/common/CardComponent";
import { COLORS, PROFILE } from "@/common/constants";

const TechnicalSkills = () => {

  const getSkillsByCategory = (category: string) => {
    switch (category) {
      case "FRONTEND":
        return PROFILE.FRONTEND;
      case "BACKEND":
        return PROFILE.BACKEND;
      case "DATABASES":
        return PROFILE.DATABASES;
      case "TOOLS & PLATFORMS":
        return PROFILE.TOOLS_PLATFORMS;
      default:
        return [];
    } 
  }
  
  const CardComponentBody = (category: string) => {
    const skills = getSkillsByCategory(category);
    return (
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between gap-2 my-2">
            <li className={COLORS[index % COLORS.length]}>{skill.name}</li>
            <span className="glass-label text-sm text-gray-400">{skill.experticeLevel}</span>
          </div>
        ))}
      </ul>
    );  
  }

  return (
    <section id="technical-skills">
      <h2 className="text-4xl font-bold my-4">Technical Skills</h2>
      <span className="text-sm text-gray-400">Technologies I Work With:</span>
      <div className="flex flex-wrap gap-4 mt-4">
        {PROFILE.SKILLS.map((skillCategory, index) => (
          <CardComponent
            key={index}
            title={skillCategory}
            body={CardComponentBody(skillCategory)}
            width="48%"
          />
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;

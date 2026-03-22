import { PROFILE } from '../common/constants';
const Experience = () => {
  return (
    <section className="my-16 scroll-mt-20" id="experience">
      <h2 className="text-4xl font-bold my-4">Work Experience</h2>
      <span className="text-gray-500 pb-4 block">My professional journey</span>
      {PROFILE.EXPERIENCE.map((experience, index) => (
        <div key={index} className="glass-card my-6 p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-2xl">{experience.company}</h3>
            <div className="glass-label">{experience.duration}</div>
          </div>
          <h4 className="text-lg font-semibold mt-4 mb-2">{experience.role}</h4>
          {experience.responsibilities.map((responsibility, idx) => (
            <div key={idx}>
              {responsibility?.header && <h4 className="text-lg font-semibold mt-4 mb-2 text-primary-header">{responsibility?.header}</h4>}
              <ul className="list-disc list-inside space-y-1 text-sm text-secondary">
                {responsibility.details.map((detail, detailIdx) => (
                  <li key={detailIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4">
            {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="glass-label text-sm">{skill}</span>
                  ))}
                </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

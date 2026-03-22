import { PROFILE } from "../common/constants";

const Education = () => {
  return (
    <section className="my-16 scroll-mt-20" id="education">
      <h2 className="text-4xl font-bold my-4">Education</h2>
      {PROFILE.EDUCATION.map((edu, index) => (
        <div key={index} className="glass-card my-6 p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-2xl font-bold text-primary-header">{edu.institution}</p>
            <span className="glass-label">{edu.duration}</span>
          </div>
          <h3 className="flex gap-2 text-secondary flex-wrap mt-4">
            <span>{edu.degree}</span>
            <span>({edu.major})</span>
          </h3>
          <div className="mt-2 text-tertiary text-sm">
            {edu.location}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;

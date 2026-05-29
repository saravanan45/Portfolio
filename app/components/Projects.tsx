import { PROFILE } from "../common/constants";

const Projects = () => {
  return (
    <section className="my-16 scroll-mt-20" id="projects">
      <h2 className="text-4xl font-bold my-4">Projects</h2>
      {PROFILE.PROJECTS.map((project, index) => (
        <div key={index} className="glass-card my-6 p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
            <h3 className="text-2xl text-primary-header">{project.header}</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-secondary">
            {project.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          <div className="mt-4">
            {project.languages && project.languages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.languages.map((language, langIdx) => (
                  <span key={langIdx} className="glass-label text-sm">
                    {language}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

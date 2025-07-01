'use client';

const skills = [
  "Python", "Java", "JavaScript", "TypeScript", "React", "HTML/CSS",
  "SQL", "SpringBoot", "FastAPI", "Flask", "Django", "Node.js", "Express",
  "Restful APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Git",
  "AWS", "Docker", "Kubernetes", "CI/CD", "Machine Learning", "NLP"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-black-800 rounded-full text-base font-medium shadow-sm hover:bg-purple-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

const Skills = () => {
  const testimonials = [
    {
      name: "React Native",
    },
    {
      name: "React.js",
    },
    {
      name: "Redux Toolkit",
    },
    {
      name: "TypeScript",
    },
    {
      name: "Javascript",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Tailwind",
    },
    {
      name: "Material UI",
    }
  ];
  return (
    <section className="py-14" id="Skills">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl underline">
            Professions Skills
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button className="SkillsBtn">{item.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

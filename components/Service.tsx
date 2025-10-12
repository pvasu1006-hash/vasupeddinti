import React from "react";


const skills = [
  {
    title: "Frontend Development",
    tech: [
      "React Native 0.72+",
      "Next.js 14",
      "Expo SDK 49+",
      "React.js 18",
      "JavaScript (ES6+)",
      "TypeScript 5.0",
      "HTML5",
      "CSS3",
      "Tailwind CSS 3.0",
      "Bootstrap 5",
      "jQuery",
      "Ionic Framework 7",
      "Zustand State Management",
      "Redux Toolkit",
      "Responsive Design",
      "Progressive Web Apps (PWA)",
      "Material-UI",
      "Styled Components"
    ]
  },
  {
    title: "Backend Development",
    tech: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "Python (FastAPI, Flask)",
      "PHP (PDO, Slim)",
      "Firebase Functions",
      "Serverless Architecture",
      "Authentication & Authorization",
      "RESTful APIs",
      "GraphQL"
    ]
  },
  {
    title: "Database & Storage",
    tech: [
      "SQLite",
      "Turso (libSQL)",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Firebase Firestore",
      "PlanetScale",
      "WatermelonDB (React Native)",
      "Expo SQLite",
      "Drizzle ORM"
    ]
  }
];

export default function Service() {
  return (
    <div id="skills" className="md:py-16 p-4 md:p-12">
      <div>
        <p className="font-semibold text-sm">
          Technologies and tools I work with regularly
        </p>
        <h1 className="text-2xl ">
          My Professional
          <span className="dm-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 pl-2">
            Skills
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-4 text-neutral-500 rounded-2xl  shadow-2xl md:py-8"
          >

            <p className="pt-4 font-bold  p-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
             {skill.title}
            </p>
            <ul className="list-disc ml-4">
      {skill.tech.map((data, index) => (
        // The li element displays each item from the array.
        <li key={index}>{data}</li>
      ))}
    </ul>


          </div>
        ))}
      </div>
    </div>
  );
}

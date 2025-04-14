import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript, SiJavascript, SiPostgresql, SiSharp, SiPhp, SiSupabase, SiTailwindcss, SiFirebase, SiDjango, SiLaravel, SiNextdotjs, SiAngular, SiPytorch, SiPowers, SiDotnet, SiLangchain } from "react-icons/si";

const techStacks = [
  { name: "Reacts", icon: <FaReact className="text-blue-400 w-8 h-8" />, link: "https://react.dev/" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" />, link: "https://nodejs.org/" },
  { name: "Python", icon: <FaPython className="text-yellow-400 w-8 h-8" />, link: "https://www.python.org/" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-8 h-8" />, link: "https://www.mongodb.com/" },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 w-8 h-8" />, link: "https://www.mysql.com/" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-8 h-8" />, link: "https://www.postgresql.org/" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-8 h-8" />, link: "https://www.typescriptlang.org/" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 w-8 h-8" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

  { name: "C#", icon: <SiSharp className="text-purple-500 w-8 h-8" />, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "Java", icon: <FaJava className="text-orange-500 w-8 h-8" />, link: "https://www.java.com/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-8 h-8" />, link: "https://tailwindcss.com/" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" />, link: "https://firebase.google.com/" },
  { name: "Django", icon: <SiDjango className="text-green-700 w-8 h-8" />, link: "https://www.djangoproject.com/" },
  { name: "Laravel", icon: <SiLaravel className="text-red-500 w-8 h-8" />, link: "https://laravel.com/" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8" />, link: "https://nextjs.org/" },
  { name: "Angular", icon: <SiAngular className="text-red-500 w-8 h-8" />, link: "https://angular.io/" },
  { name: "Pytorch", icon: <SiPytorch className="text-orange-500 w-8 h-8" />, link: "https://pytorch.org/" },
  { name: "Power BI", icon: <SiPowers className="text-yellow-400 w-8 h-8" />, link: "https://powerbi.microsoft.com/" },
  { name: "ASP.NET", icon: <SiDotnet className="text-blue-600 w-8 h-8" />, link: "https://dotnet.microsoft.com/en-us/apps/aspnet" },
  { name: "LangChain", icon: <SiLangchain className="text-purple-500 w-8 h-8" />, link: "https://www.langchain.com/" },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" />, link: "https://git-scm.com/" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 w-8 h-8" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Supabase", icon: <SiSupabase className="text-green-400 w-8 h-8" />, link: "https://supabase.com/" },
];

export default function TechStackGrid() {

  return (
    <div className="relative p-8">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-noise-pattern before:opacity-10"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Tech Stack
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-3 place-items-center">
          {techStacks.map((stack, index) => (
            <a
              key={index}
              href={stack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-800"
            >
              {stack.icon}
              <span className="mt-2 text-gray-300 text-sm">{stack.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

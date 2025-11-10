import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaTerminal,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaMarkdown,
} from "react-icons/fa";
import {
  SiKotlin,
  SiTypescript,
  SiC,
  SiVite,
  SiTailwindcss,
  SiAndroidstudio,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Tech() {
  const skills = [
    { name: "HTML5/ CSS", years: 3, scene: "個人開発・アルバイト" },
    { name: "JavaScript", years: 2, scene: "個人開発・アルバイト" },
    { name: "Kotlin", years: 1, scene: "業務委託・インターンシップ" },
    { name: "Python", years: 3, scene: "個人開発・授業" },
    { name: "Java", years: 2, scene: "個人開発・授業" },
    { name: "TypeScript", years: 1, scene: "個人開発" },
    { name: "C/C++", years: 1, scene: "授業" },
    { name: "ShellScript", years: 1, scene: "個人開発" },
  ];

  const tools = [
    {
      name: "React",
      years: 1,
      scene: "個人開発",
      icon: <FaReact className="text-sky-400 text-5xl" />,
    },
    {
      name: "Vite",
      years: 1,
      scene: "個人開発",
      icon: <SiVite className="text-purple-500 text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      years: 1,
      scene: "個人開発",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
    {
      name: "Git",
      years: 3,
      scene: "個人開発・チーム開発・業務委託・インターンシップ",
      icon: <FaGitAlt className="text-orange-600 text-5xl" />,
    },
    {
      name: "GitHub",
      years: 3,
      scene: "個人開発・チーム開発・業務委託・インターンシップ",
      icon: <FaGithub className="text-gray-800 text-5xl" />,
    },
    {
      name: "VS Code",
      years: 3,
      scene: "個人開発・授業・アルバイト",
      icon: <VscVscode className="text-blue-500 text-5xl" />,
    },
    {
      name: "Android Studio",
      years: 2,
      scene: "業務委託・授業・個人開発",
      icon: <SiAndroidstudio className="text-green-600 text-5xl" />,
    },
    {
      name: "Docker",
      years: 1,
      scene: "個人開発",
      icon: <FaDocker className="text-sky-500 text-5xl" />,
    },
    {
      name: "Linux",
      years: 2,
      scene: "授業・個人開発",
      icon: <FaLinux className="text-gray-700 text-5xl" />,
    },
    {
      name: "Markdown",
      years: 3,
      scene: "個人開発・ドキュメント作成",
      icon: <FaMarkdown className="text-slate-800 text-5xl" />,
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "HTML5/ CSS":
        return <FaHtml5 className="text-orange-600 text-5xl" />;
      case "JavaScript":
        return <FaJs className="text-yellow-500 text-5xl" />;
      case "Kotlin":
        return <SiKotlin className="text-purple-500 text-5xl" />;
      case "Python":
        return <FaPython className="text-blue-500 text-5xl" />;
      case "Java":
        return <FaJava className="text-red-600 text-5xl" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-600 text-5xl" />;
      case "C/C++":
        return <SiC className="text-slate-700 text-5xl" />;
      case "ShellScript":
        return <FaTerminal className="text-green-600 text-5xl" />;
      default:
        return <FaCss3Alt className="text-gray-500 text-5xl" />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10 text-center drop-shadow-lg">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-20">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-4 md:p-6 w-full sm:w-72 md:w-80 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              {getIcon(skill.name)}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
                {skill.name}
              </h3>
            </div>
            <p className="text-slate-700 text-base md:text-lg">使用歴：{skill.years}年</p>
            <p className="text-slate-700 text-base md:text-lg">使用シーン：{skill.scene}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10 text-center drop-shadow-lg">
        Tools & Environments
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-4 md:p-6 w-full sm:w-72 md:w-80 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              {tool.icon}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
                {tool.name}
              </h3>
            </div>
            <p className="text-slate-700 text-base md:text-lg">使用歴：{tool.years}年</p>
            <p className="text-slate-700 text-base md:text-lg">使用シーン：{tool.scene}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

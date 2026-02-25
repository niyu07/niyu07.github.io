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
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Tech Stack
        </h1>
        <p className="text-center text-white/70 mb-16 text-lg">
          私が使用している技術スタック
        </p>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            プログラミング言語
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-6 hover:bg-white/90 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform group-hover:scale-110 transition-transform">
                    {getIcon(skill.name)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-800/90">
                    <span className="text-gray-900 font-semibold">使用歴:</span>{" "}
                    {skill.years}年
                  </p>
                  <p className="text-gray-800/90">
                    <span className="text-gray-900 font-semibold">場面:</span>{" "}
                    {skill.scene}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            ツール・環境
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-6 hover:bg-white/90 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {tool.name}
                  </h3>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-800/90">
                    <span className="text-gray-900 font-semibold">使用歴:</span>{" "}
                    {tool.years}年
                  </p>
                  <p className="text-gray-800/90">
                    <span className="text-gray-900 font-semibold">場面:</span>{" "}
                    {tool.scene}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

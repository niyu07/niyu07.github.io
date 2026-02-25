import useSWR from "swr";
import { useState, useEffect } from "react";
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

  const GitHubGrass: React.FC<{ username?: string }> = ({
    username = "niyu07",
  }) => {
    const fetcher = async (url: string) => {
      const res = await fetch(url);
      const ct = res.headers.get("content-type") ?? "";
      if (!res.ok) {
        const body = ct.includes("application/json")
          ? await res.json().catch(() => null)
          : await res.text().catch(() => null);
        const snippet =
          typeof body === "string"
            ? body.slice(0, 500)
            : JSON.stringify(body)?.slice(0, 500);
        throw new Error(snippet ?? `HTTP ${res.status}`);
      }
      if (!ct.includes("application/json")) {
        const text = await res.text();
        throw new Error(`Expected JSON but got: ${text.slice(0, 200)}`);
      }
      return res.json();
    };

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL ||
      "https://holy-violet-517d.niyu98194.workers.dev";

    const {
      data: calendar,
      error,
      isValidating,
      mutate,
    } = useSWR(
      `${backendUrl}/api/github/contributions/${encodeURIComponent(username)}`,
      fetcher,
      {
        revalidateOnFocus: false,
        dedupingInterval: 60000,
        shouldRetryOnError: false,
      },
    );

    const [selectedDay, setSelectedDay] = useState<any | null>(null);

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedDay(null);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    if (!calendar && isValidating)
      return (
        <div className="text-center text-white mt-8">草グラフを読み込み中…</div>
      );

    if (error)
      return (
        <div className="text-center mt-8">
          <div className="text-red-400 mb-2">エラー: {String(error)}</div>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => mutate()}
              className="bg-sky-500/90 hover:bg-sky-500 text-white px-3 py-1 rounded border-2 border-sky-300"
            >
              再試行
            </button>
          </div>
        </div>
      );

    if (!calendar) return null;

    // Flatten days and group by month (YYYY-MM) for mobile month-view
    const daysFlat: any[] = Array.isArray(calendar.weeks)
      ? calendar.weeks.flatMap((w: any) => w.contributionDays || [])
      : [];
    daysFlat.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    const months: Record<string, any[]> = {};
    daysFlat.forEach((d) => {
      const key = d.date.slice(0, 7); // YYYY-MM
      if (!months[key]) months[key] = [];
      months[key].push(d);
    });

    return (
      <div>
        <div className="flex justify-center mb-6">
          <div className="text-white/80 text-lg">
            Total Contributions:{" "}
            <span className="font-bold text-white">
              {calendar.totalContributions}
            </span>
          </div>
        </div>

        {/* Week-columns view (desktop) - hidden on small screens */}
        <div className="hidden sm:block">
          <div className="flex justify-center overflow-auto">
            <div className="flex items-start gap-1 px-2 py-2 bg-transparent max-w-full">
              {Array.isArray(calendar.weeks) &&
                calendar.weeks.map((week: any, wi: number) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {Array.isArray(week.contributionDays) &&
                      week.contributionDays.map((day: any, di: number) => (
                        <div key={day.date ?? `${wi}-${di}`}>
                          <button
                            onClick={() => setSelectedDay(day)}
                            title={`${day.date} — ${day.contributionCount} contributions`}
                            role="button"
                            aria-pressed={selectedDay?.date === day.date}
                            aria-label={`${day.date}: ${day.contributionCount} contributions`}
                            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-sm focus:outline-none ${
                              selectedDay?.date === day.date
                                ? "ring-2 ring-sky-400"
                                : ""
                            }`}
                            style={{ backgroundColor: day.color }}
                          />
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Month view (mobile) - shown only on small screens (calendar grid) */}
        <div className="block sm:hidden">
          <div className="space-y-8">
            {Object.keys(months).map((monthKey) => {
              const monthMap: Record<string, any> = {};
              months[monthKey].forEach((d: any) => (monthMap[d.date] = d));

              const [year, mon] = monthKey
                .split("-")
                .map((s) => parseInt(s, 10));
              const first = new Date(year, mon - 1, 1);
              const last = new Date(year, mon, 0);
              const daysInMonth = last.getDate();

              // build weeks as rows, Sunday-first
              const weeks: any[][] = [];
              let week: any[] = new Array(7).fill(null);
              // fill initial empty days
              let weekday = first.getDay();
              for (let d = 1; d <= daysInMonth; d++) {
                const dateStr = `${year.toString().padStart(4, "0")}-${mon
                  .toString()
                  .padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
                const dayObj = monthMap[dateStr] ?? {
                  date: dateStr,
                  contributionCount: 0,
                  color: "#ebedf0",
                };
                week[weekday] = dayObj;
                weekday++;
                if (weekday === 7) {
                  weeks.push(week);
                  week = new Array(7).fill(null);
                  weekday = 0;
                }
              }
              // push last week if any day present
              if (week.some((c) => c !== null)) weeks.push(week);

              const label = first.toLocaleString("ja-JP", {
                year: "numeric",
                month: "long",
              });

              return (
                <div key={monthKey}>
                  <div className="text-sm text-slate-300 mb-2">{label}</div>
                  <div className="grid grid-cols-7 gap-1 text-xs text-slate-200 mb-2">
                    <div className="text-center">日</div>
                    <div className="text-center">月</div>
                    <div className="text-center">火</div>
                    <div className="text-center">水</div>
                    <div className="text-center">木</div>
                    <div className="text-center">金</div>
                    <div className="text-center">土</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {weeks.map((wk, wi) =>
                      wk.map((day: any, di: number) => (
                        <div
                          key={`${wi}-${di}`}
                          className="flex justify-center"
                        >
                          {day ? (
                            <button
                              onClick={() => setSelectedDay(day)}
                              role="button"
                              aria-pressed={selectedDay?.date === day.date}
                              aria-label={`${day.date}: ${day.contributionCount} contributions`}
                              title={`${day.date} — ${day.contributionCount} contributions`}
                              className="w-6 h-6 rounded-sm focus:outline-none"
                              style={{ backgroundColor: day.color }}
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-sm bg-transparent" />
                          )}
                        </div>
                      )),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 選択された日の詳細表示（中央モーダル） */}
        {selectedDay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelectedDay(null)}
            />
            <div
              role="dialog"
              aria-modal="true"
              className="relative z-10 bg-slate-800 text-white rounded-lg p-4 max-w-sm w-full mx-4 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">
                    {selectedDay.date}
                  </div>
                  <div className="text-sm text-slate-300">
                    {selectedDay.contributionCount} contributions
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="bg-white/90 text-black px-3 py-1 rounded border-2 border-white/80 hover:bg-white"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
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

        {/*
        GitHub Contributions
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            GitHub Contributions
          </h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <GitHubGrass username="niyu07" />
          </div>
        </section>
        */}
      </div>
    </div>
  );
}

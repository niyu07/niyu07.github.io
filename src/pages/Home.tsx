const profileIcon = new URL("../assets/profile-icon.JPG", import.meta.url).href;
import githubMark from "../assets/github-mark.svg";
import xIcon from "../assets/x-icon.svg";
import qiitaIcon from "../assets/qiita-icon.svg";
import zennIcon from "../assets/zenn-icon.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
        <div className="text-center max-w-4xl">
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-8 border-4 border-white/20"
            src={profileIcon}
            alt="niyu"
          />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r  text-6xl mb-8">
            <span className="text-white">Hi, I'm niyu!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-6">@niyu98194</p>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            大学生エンジニアです。ネットワーク、セキュリティ、アプリ開発に興味があります。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <button className="px-8 py-3 bg-white/90 text-black rounded-full font-semibold hover:bg-white transition-all hover:scale-105 border-2 border-white/80">
                About Me
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 bg-white/80 text-black rounded-full font-semibold hover:bg-white transition-all hover:scale-105 border-2 border-white/80">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* GitHub */}
            <a
              href="https://github.com/niyu07"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={githubMark}
                  alt="GitHub"
                  className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-white text-center font-semibold">GitHub</p>
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/niyu98194"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={xIcon}
                  alt="X"
                  className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-white text-center font-semibold">
                  X (Twitter)
                </p>
              </div>
            </a>

            {/* Qiita */}
            <a
              href="https://qiita.com/niyu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={qiitaIcon}
                  alt="Qiita"
                  className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-white text-center font-semibold">Qiita</p>
              </div>
            </a>

            {/* Zenn */}
            <a
              href="https://zenn.dev/niyu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={zennIcon}
                  alt="Zenn"
                  className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-white text-center font-semibold">Zenn</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

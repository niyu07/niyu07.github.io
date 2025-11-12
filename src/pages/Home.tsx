const profileIcon = new URL('../assets/profile-icon.JPG', import.meta.url).href;
import githubMark from '../assets/github-mark.svg';
import xIcon from '../assets/x-icon.svg';
import qiitaIcon from '../assets/qiita-icon.svg'; 
import zennIcon from '../assets/zenn-icon.svg'; 

export default function Home() {
  return (
    <div className="min-h-[300vh] w-full px-4 md:px-0">
      {/* アイコンと名前 */}
      <div className="flex flex-col md:flex-row justify-center items-center pt-[20vh] md:pt-[30vh] gap-6 md:gap-0">
        <img
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover"
          src={profileIcon}
          alt="アイコン"
        />
        <div className="text-center md:text-left md:pl-20">
          <p className="text-4xl md:text-6xl font-bold text-white border-b-4 border-white inline-block pb-6 md:pb-12 md:pt-20 w-full md:w-96">
            niyu
          </p>
          <p className="text-xl md:text-2xl text-white pt-4">@niyu98194</p>
        </div>
      </div>

      {/* Linkセクション */}
      <div className="pt-[30vh] md:pt-[60vh]">
        <p className="text-2xl md:text-3xl text-white text-center mb-10">my Link</p>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-[90vw] md:max-w-none">
            {/* GitHub */}
            <a href="https://github.com/niyu07" className="w-full">
              <button className="flex items-center gap-4 bg-white text-black w-full md:w-80 h-20 px-6 py-4 rounded shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={githubMark}
                  alt="GitHubアイコン"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold">GitHub</span>
              </button>
            </a>

            {/* X */}
            <a href="https://x.com/niyu98194" className="w-full">
              <button className="flex items-center gap-4 bg-white text-black w-full md:w-80 h-20 px-6 py-4 rounded shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={xIcon}
                  alt="Xアイコン"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold">X</span>
              </button>
            </a>

            {/* Qiita */}
            <a href="https://qiita.com/niyu" className="w-full">
              <button className="flex items-center gap-4 bg-white text-black w-full md:w-80 h-20 px-6 py-4 rounded shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={qiitaIcon}
                  alt="Qiitaアイコン"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold">Qiita</span>
              </button>
            </a>

            {/* Zenn */}
            <a href="https://zenn.dev/niyu" className="w-full">
              <button className="flex items-center gap-4 bg-white text-black w-full md:w-80 h-20 px-6 py-4 rounded shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={zennIcon}
                  alt="Zennアイコン"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold">Zenn</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
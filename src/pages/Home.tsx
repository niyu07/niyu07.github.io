export default function Home() {
  return (
    <div className="min-h-[300vh] w-full">
      {/* アイコンと名前 */}
      <div className="flex justify-center pt-[30vh]">
        <img
          className="w-64 h-64 rounded-full object-cover"
          src="src/assets/profile-icon.JPG"
          alt="アイコン"
        />
        <div className="text-center pl-20">
          <p className="text-6xl font-bold text-white border-b-4 border-white inline-block pb-12 pt-20 w-96 text-left">
            niyu
          </p>
          <p className="text-2xl text-white pt-4 text-left">@niyu98194</p>
        </div>
      </div>

      {/* Linkセクション */}
      <div className="pt-[60vh]">
        <p className="text-3xl text-white text-center mb-10">my Link</p>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-8">
            {/* GitHub */}
            <a href="https://github.com/niyu07">
                <button className="flex items-center gap-4 bg-white text-black w-80 h-20 px-6 py-4 rounded shadow-md">
              <img
                src="src/assets/github-mark.svg"
                alt="GitHubアイコン"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-semibold">GitHub</span>
            </button>
            </a>
            

            {/* X */}
            <a href="https://x.com/niyu98194">
                <button className="flex items-center gap-4 bg-white text-black w-80 h-20 px-6 py-4 rounded shadow-md">
              <img
                src="src/assets/x-icon.svg"
                alt="Xアイコン"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-semibold">X</span>
            </button>
            </a>
            

            {/* Qiita */}
<a href="https://qiita.com/niyu">
  <button className="flex items-center gap-4 bg-white text-black w-80 h-20 px-6 py-4 rounded shadow-md">
    <img
      src="src/assets/qiita-icon.svg"
      alt="Qiitaアイコン"
      className="w-10 h-10 rounded-full object-cover"
    />
    <span className="text-lg font-semibold">Qiita</span>
  </button>
</a>
            {/* Zenn */}
            <a href="https://zenn.dev/niyu">
                <button className="flex items-center gap-4 bg-white text-black w-80 h-20 px-6 py-4 rounded shadow-md">
              <img
                src="src/assets/zenn-icon.svg"
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
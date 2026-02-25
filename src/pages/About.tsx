export default function About() {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          About Me
        </h1>
        <p className="text-center text-white/70 mb-16 text-lg">
          私についての紹介
        </p>

        {/* Introduction Card */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              自己紹介
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-900">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">大学:</span>
                  <span className="text-gray-800">広島市立大学</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="min-w-[120px]">
                    <span className="font-semibold">学部、学科、講座:</span>
                    <br />
                    <span className="text-gray-800">
                      情報科学部 情報科学科 コミュニケーション講座
                    </span>
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">興味分野:</span>
                  <span className="text-gray-800">
                    ネットワーク、セキュリティ、アプリ開発
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">サークル:</span>
                  <span className="text-gray-800">
                    いちぴろエクスプローラ、天地創造部
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">所属団体:</span>
                  <span className="text-gray-800">
                    特定非営利活動法人 NxTEND
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            職歴・活動
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                アルバイト
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                スタートプログラミング
              </h3>
              <p className="text-white/70 text-sm mb-3">2023年10月〜現在</p>
              <p className="text-white/80 text-sm leading-relaxed">
                プログラミングスクールで講師のアルバイトをしています。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                業務委託
              </span>
              <h3 className="text-xl font-bold text-white mb-2">教材開発</h3>
              <p className="text-white/70 text-sm mb-3">2025年06月〜現在</p>
              <p className="text-white/80 text-sm leading-relaxed">
                スタートプログラミングの業務委託として、プログラミングスクールの教材開発に携わっています。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-purple-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                業務委託
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Androidアプリ開発
              </h3>
              <p className="text-white/70 text-sm mb-3">2025年02月〜現在</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Androidアプリの開発に携わっています。主にKotlinとJetpack
                Composeを用いてUIを開発しています。
              </p>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            イベント参加歴
          </h2>
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white transition-all">
              <div className="flex items-start gap-4">
                <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shrink-0">
                  参加
                </span>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-1">2023.11.25</p>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">
                    セキュリティ・ミニキャンプ in 広島 2023
                  </h3>
                  <p className="text-gray-800 text-sm">
                    広島で開催されたセキュリティの勉強イベントに参加し、実践的な講義や演習を体験しました。
                  </p>
                </div>
              </div>
            </div>

            {/* 他のイベントを簡潔に表示 */}
            {[
              {
                date: "2024.02.03",
                title: "塩尻サイバーセキュリティ勉強会2024年冬 in 塩尻",
                type: "参加",
              },
              {
                date: "2025.03.15",
                title: "P3NFEST 2025 Winter",
                type: "参加",
              },
              {
                date: "2025.03.16",
                title: "第2回 セキュリティ若手の会（LT&交流会）",
                type: "参加",
              },
              { date: "2025.03.22", title: "Setory", type: "参加" },
              {
                date: "2025.05.03",
                title: "第2回広島ITイノベーションフェスタ",
                type: "登壇",
              },
              {
                date: "2025.05.29",
                title: "のみぞうさんと2時間でハッキングをはじめよう",
                type: "参加",
              },
              { date: "2025.06.07", title: "Mini P3NFEST", type: "参加" },
              {
                date: "2025.06.26",
                title: "NFLabs. Purple Flair Workshop #1",
                type: "参加",
              },
              {
                date: "2025.10.25",
                title: "セキュリティミニキャンプ in Hiroshima 2025",
                type: "参加",
              },
              {
                date: "2025.12.06",
                title: "Setory vol.3",
                type: "運営",
              },
              {
                date: "2026.02.11 ~ 02.13",
                title: "JANOG 57 in OSAKA",
                type: "参加",
              },
              {
                date: "2026.02.22",
                title: "KC3Hack 2026",
                type: "メンター",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white transition-all"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-block text-white text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${
                      event.type === "登壇"
                        ? "bg-red-500"
                        : event.type === "運営"
                          ? "bg-purple-500"
                          : "bg-green-500"
                    }`}
                  >
                    {event.type}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                    <h3 className="text-gray-900 font-bold text-lg">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            インターンシップ
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "2025.05.31",
                company: "Docomo",
                desc: "ドコモグループのセキュリティ業務と、フィッシングサイトの仕組みについて学びました。",
              },
              {
                date: "2025.07.05",
                company: "CyberAgent",
                desc: "データセンタの見学や実際にサーバーやスイッチを触ってネットワークについて学びました。",
              },
              {
                date: "2025.08.16 ~ 08.29",
                company: "チームラボ株式会社",
                desc: "スマホアプリエンジニアとしてサマーインターンに参加させていただきました。",
              },
              {
                date: "2025.08.30",
                company: "株式会社ジーニー",
                desc: "Webアプリケーションの実装課題に取り組みました。",
              },
              {
                date: "2025.09.04 ~ 09.05",
                company: "株式会社エネコム",
                desc: "二日間でネットワーク部門とシステム部門の仕事体験をしました。",
                type: "仕事体験",
              },
              {
                date: "2025.09.17",
                company: "株式会社インターネットイニシアティブ",
                desc: "オンラインのセキュリティ概論に参加しました。",
              },
              {
                date: "2025.10.27",
                company: "株式会社インターネットイニシアティブ",
                desc: "SOCの見学とエンジニアの方と交流しました。",
              },
              {
                date: "2025.11.09",
                company: "株式会社エヌ・ティ・ティエムイー",
                desc: "ネットワークをゲーム形式で学びました。",
              },
              {
                date: "2026.02.15 ~ 02.17, 02.18 ~ 02.20",
                company: "株式会社エヌ・ティ・ティエムイー",
                desc: "いろいろなネットワークに関することを学びました。",
              },
            ].map((intern, idx) => (
              <div
                key={idx}
                className="bg-white border border-white rounded-2xl p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold shrink-0">
                    {intern.type || "インターン"}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-1">{intern.date}</p>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">
                      {intern.company}
                    </h3>
                    {intern.desc && (
                      <p className="text-gray-800 text-sm">{intern.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

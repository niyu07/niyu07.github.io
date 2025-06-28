export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center drop-shadow mb-10">
        Welcome to niyu web page!!
      </h1>

      <section className="mb-10">
        <h2 className="text-xl mb-4">Introduction</h2>
        <ul className="space-y-2 text-lg pl-4">
          <li>所属大学：広島市立大学</li>
          <li>学部・学科：情報科学部 情報科学科</li>
          <li>所属サークル：いちぴろエクスプローラ，天地創造部</li>
          <li>興味・志望分野：ネットワーク、セキュリティ、アプリ開発</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl mb-4">Work History</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white text-black rounded-xl shadow p-4">
            <span className="inline-block bg-orange-400 text-white text-xs px-2 py-1 rounded-full mb-2">アルバイト</span>
            <h3 className="font-bold">スタートプログラミング</h3>
            <p>期間：2023年10月〜現在</p>
            <p className="text-sm mt-2">
              プログラミングスクールで講師のアルバイトをしています。
            </p>
          </div>

          <div className="bg-white text-black rounded-xl shadow p-4">
            <span className="inline-block bg-orange-400 text-white text-xs px-2 py-1 rounded-full mb-2">業務委託</span>
            <h3 className="font-bold">業務委託</h3>
            <p>期間：2025年06月〜現在</p>
            <p className="text-sm mt-2">
              スタートプログラミングの業務委託として、プログラミングスクールの教材開発に携わっています。  
            </p>
          </div>
  

          <div className="bg-white text-black rounded-xl shadow p-4">
            <span className="inline-block bg-orange-400 text-white text-xs px-2 py-1 rounded-full mb-2">業務委託</span>
            <h3 className="font-bold">業務委託</h3>
            <p>期間：2025年02月〜現在</p>
            <p className="text-sm mt-2">
              Androidアプリの開発に携わっています。主にKotlinとJetpack Composeを用いてUIを開発しています。
            </p>
          </div>
        </div>
      </section>

      {/* <section className="mb-10">
        <h2 className="text-xl mb-4">Certification</h2>
        <div className="bg-white text-black p-4 rounded-xl shadow">
          <p>20XX.05</p>
          <p className="font-bold">？？？？</p>
        </div>
      </section> */}

      <section className="mb-10">
  <h2 className="text-xl mb-4">Events</h2>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2023.11.25</p>
    <p className="font-bold">セキュリティ・ミニキャンプ in 広島 2023</p>
    <p className="text-sm">広島で開催されたセキュリティの勉強イベントに参加し、実践的な講義や演習を体験しました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2024.02.03</p>
    <p className="font-bold">塩尻サイバーセキュリティ勉強会2024年冬 in 塩尻</p>
    <p className="text-sm">塩尻で開催された勉強会で、セキュリティに関する最新の話題を学びました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.03.15</p>
    <p className="font-bold">P3NFEST 2025 Winter</p>
    <p className="text-sm">学生向けのセキュリティカンファレンスに参加し、多くの刺激を受けました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.03.16</p>
    <p className="font-bold">第2回 セキュリティ若手の会（LT&交流会）</p>
    <p className="text-sm">セキュリティに関心のある若手同士でLTや交流を行いました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.03.22</p>
    <p className="font-bold">Setory</p>
    <p className="text-sm">セキュリティとストーリーをテーマにしたユニークなイベントに参加しました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">登壇</span>
    <p>2025.05.03</p>
    <p className="font-bold">第2回広島ITイノベーションフェスタ</p>
    <p className="text-sm">イベントで登壇し、自身の学びや取り組みを発表しました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.05.29</p>
    <p className="font-bold">のみぞうさんと2時間でハッキングをはじめよう</p>
    <p className="text-sm">初心者向けハッキング講座に参加し、基礎的な技術を体験しました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.06.07</p>
    <p className="font-bold">Mini P3NFEST</p>
    <p className="text-sm">学生向けセキュリティカンファレンスに参加し、さまざまな知識を深めました。</p>
  </div>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mb-2">参加</span>
    <p>2025.06.26</p>
    <p className="font-bold">NFLabs. Purple Flair Workshop #1</p>
    <p className="text-sm">ワークショップ形式で実践的なサイバーセキュリティを学びました。</p>
  </div>
</section>

<section className="mb-10">
  <h2 className="text-xl mb-4">Internship</h2>

  <div className="bg-white text-black p-4 rounded-xl shadow mb-4">
    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2">インターン</span>
    <p>2025.05.31（土）</p>
    <p className="font-bold">Docomo</p>
    <p className="text-sm">
      ドコモグループのセキュリティ業務と、フィッシングサイトの仕組みについて学びました。
    </p>
  </div>
</section>
    </>
  );
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-custom-gradient min-h-[300vh] w-full">
        {/* ヘッダー */}
        <header className="p-8 flex gap-8 justify-end">
          <Link to="/" className="text-white">
            ホーム
          </Link>
          <Link to="/about" className="text-white">
            このサイトについて
          </Link>
          <Link to="/tech" className="text-white">
            技術
          </Link>
          <Link to="/contact" className="text-white">
            お問い合わせ
          </Link>
        </header>

        {/* メインの中身 */}
        <main className="p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* フッター */}
        <footer className="p-4 text-center">
          <p>© 2023 My Website</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

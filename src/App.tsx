import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";

function App() {
  const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      }
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false);
        setMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <BrowserRouter basename={basename}>
      <div className="bg-custom-gradient min-h-[300vh] w-full">
        {/* ヘッダー */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 p-4 md:p-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm transition-transform duration-300 ${
            isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* デスクトップメニュー */}
          <nav className="hidden md:flex gap-8 justify-end">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              ホーム
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors">
              私について
            </Link>
            <Link to="/tech" className="text-white hover:text-gray-200 transition-colors">
              技術
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="メニュー"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* モバイルメニュー */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Link
                to="/"
                className="text-white hover:text-gray-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                私について
              </Link>
              <Link
                to="/tech"
                className="text-white hover:text-gray-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                技術
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          )}
        </header>

        {/* メインの中身 */}
        <main className="pt-20 md:pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* フッター */}
        <footer className="p-4 text-center">
          <p className="text-white text-sm md:text-base">© 2023 My Website</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

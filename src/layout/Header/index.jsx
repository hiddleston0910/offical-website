import Logo from "@/assets/images/Logo_I2B_BLACK.png";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const headerRef = useRef();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);

    // 在组件卸载时清除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-10 w-full flex justify-between px-2 text-sm transition-all duration-300 md:text-base md:px-6 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-sm"
          : " bg-transparent"
      }`}
    >
      <div className="py-2">
        <a>
          <img src={Logo} className="w-2/3 md:w-full" />
        </a>
      </div>

      <ul className="flex">
        <li
          className={`inline-block px-2 py-4 lg:px-4 lg:py-6 ${
            isScrolled ? "text-[#161C24]" : "text-white"
          }`}
        >
          <Link to="#introduce">全新展望</Link>
        </li>
        <li
          className={`inline-block px-2 py-4 lg:px-4 lg:py-6 ${
            isScrolled ? "text-[#161C24]" : "text-white"
          }`}
        >
          <Link to="#about-us">關於我們</Link>
        </li>
        <li
          className={`inline-block px-2 py-4 lg:px-4 lg:py-6 ${
            isScrolled ? "text-[#161C24]" : "text-white"
          }`}
        >
          <Link to="#premium">品牌理念</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

import searchIcon from "../../assets/search.svg";
import alarmIcon from "../../assets/alarm.svg";
import userIcon from "../../assets/user.png";
import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 데스크탑에서는 메뉴 보이게, 모바일에서는 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(debouncedSearchTerm.trim())}`);
    }
  }, [debouncedSearchTerm, navigate]);

  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <img
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className={styles.nav__logo}
          onClick={() => navigate("/")}
        />

        <ul className={styles.nav__menu}>
          <li onClick={() => navigate("/")}>홈</li>
          <li>시리즈</li>
          <li>영화</li>
          <li>게임</li>
          <li>New! 요즘 대세 콘텐츠</li>
          <li>내가 찜한 리스트</li>
          <li>언어별로 찾아보기</li>
        </ul>

        <div
          className={styles.nav__mobileMenu}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          메뉴 ▼
        </div>

        {isMobileMenuOpen && (
          <ul className={styles.mobileMenu}>
            <li>홈</li>
            <li>시리즈</li>
            <li>영화</li>
            <li>게임</li>
            <li>New! 요즘 대세 콘텐츠</li>
            <li>내가 찜한 리스트</li>
            <li>언어별로 찾아보기</li>
          </ul>
        )}
      </div>

      <div className={styles.nav__icons}>
        <img
          src={searchIcon}
          alt="Search Icon"
          className={styles.nav__icon}
          onClick={() => setShowSearch((prev) => !prev)}
        />

        {showSearch && (
          <div className={styles.searchBox}>
            <img src={searchIcon} alt="검색" className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="제목, 사람, 장르"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <span>키즈</span>
        <img src={alarmIcon} alt="Alarm Icon" className={styles.nav__icon} />
        <img src={userIcon} alt="User Icon" className={styles.nav__icon} />
      </div>
    </div>
  );
}

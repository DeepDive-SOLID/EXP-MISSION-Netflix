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
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // ✅ debounce 적용
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(debouncedSearchTerm.trim())}`);
    }
  }, [debouncedSearchTerm, navigate]);

  return (
    <div className={styles.nav}>
      <img
        alt="Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className={styles.nav__logo}
        onClick={() => window.location.reload()}
      />

      <ul className={styles.nav__menu}>
        <li>홈</li>
        <li>시리즈</li>
        <li>영화</li>
        <li>게임</li>
        <li>New! 요즘 대세 콘텐츠</li>
        <li>내가 찜한 리스트</li>
        <li>언어별로 찾아보기</li>
      </ul>

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

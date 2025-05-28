// MovieModal.jsx
import React, { useRef } from "react";
import styles from "./MovieModal.module.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import thumb from "../../assets/thumb.svg";

const MovieModal = ({ movie, setModalOpen }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setModalOpen(false));

  const {
    backdrop_path,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    genres = [],
    number_of_episodes,
    adult,
    credits,
    popularity,
  } = movie || {};

  return (
    <div className={styles.presentation}>
      <div className={styles.wrapperModal}>
        <div className={styles.modal} ref={ref}>
          <span
            className={styles.modalClose}
            onClick={() => setModalOpen(false)}
          >
            x
          </span>

          <img
            className={styles.modalPosterImg}
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title || name}
          />

          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{title || name}</h2>

            <div className={styles.buttonGroup}>
              <button className={styles.playButton}>
                <span className={styles.playIcon}>▶</span> 재생
              </button>
              <button className={styles.iconButton}>＋</button>
              <button className={styles.iconButton}>
                <img src={thumb} alt="thumb" className={styles.iconImg} />
              </button>
            </div>

            <div className={styles.meta}>
              <span>{(release_date || first_air_date || "").slice(0, 4)}</span>
              {number_of_episodes && (
                <span>에피소드 {number_of_episodes}개</span>
              )}
              <span className={styles.badge}>HD</span>
              <span className={styles.age}>{adult ? "18+" : "15+"}</span>
            </div>

            {popularity && (
              <div className={styles.top10}>
                <span className={styles.topBadge}>TOP 10</span> 오름 인기 순위
              </div>
            )}

            <p className={styles.description}>{overview}</p>

            <div className={styles.additional}>
              {credits?.cast?.length > 0 && (
                <p>
                  <b>출연:</b>{" "}
                  {credits.cast
                    .slice(0, 3)
                    .map((actor) => actor.name)
                    .join(", ")}
                  {credits.cast.length > 3 && <i>더 보기</i>}
                </p>
              )}
              {genres.length > 0 && (
                <p>
                  <b>장르:</b> {genres.map((g) => g.name).join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

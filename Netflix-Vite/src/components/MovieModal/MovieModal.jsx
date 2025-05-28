import React, { useRef } from "react";
import styles from "./MovieModal.module.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className={styles.presentation}>
      <div className={styles.wrapperModal}>
        <div className={styles.modal} ref={ref}>
          <span
            onClick={() => setModalOpen(false)}
            className={styles.modalClose}
          >
            X
          </span>
          <img
            className={styles.modalPosterImg}
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className={styles.modalContent}>
            <p className={styles.modalDetails}>
              <span className={styles.modalUserPerc}>100% for you</span>
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className={styles.modalTitle}>{title ? title : name}</h2>
            <p className={styles.modalOverview}>평점 : {vote_average}</p>
            <p className={styles.modalOverview}>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import styles from "./Row.module.css";
import MovieModal from "../MovieModal/MovieModal.jsx";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  };

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  return (
    <section className={styles.row}>
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={false}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: { slidesPerView: 6, slidesPerGroup: 6 },
          998: { slidesPerView: 5, slidesPerGroup: 5 },
          625: { slidesPerView: 4, slidesPerGroup: 4 },
          0: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        <div id={id} className={styles.row__posters}>
          {(isLargeRow ? movies.slice(0, 10) : movies).map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <div className={styles.posterWrapper}>
                {isLargeRow && (
                  <span className={styles.rankNumber}>{index + 1}</span>
                )}
                <img
                  onClick={() => handleClick(movie)}
                  className={`${styles.row__poster} ${
                    isLargeRow ? styles.row__posterLarge : ""
                  }`}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  loading="lazy"
                  alt={movie.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

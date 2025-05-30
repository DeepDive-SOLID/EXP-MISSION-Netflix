import React, { useEffect, useState } from "react";
import requests from "../../api/requests";
import axios from "../../api/axios";
import styles from "./Banner.module.css"; // CSS Module로 변경

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (!isClicked) {
    return (
      <header
        className={styles.banner}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.banner__contents}>
          <h1>{movie.title || movie.name || movie.original_name}</h1>
          <div className={styles.banner__buttons}>
            <button
              className={`${styles.banner__button} ${styles.play}`}
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className={`${styles.banner__button} ${styles.info}`}>
              <div className={styles.space}></div> More Information
            </button>
          </div>
          <h1 className={styles.banner__description}>
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className={styles.banner__fadeBottom} />
      </header>
    );
  } else {
    return (
      <>
        {movie.videos?.results?.length > 0 ? (
          <div className={styles.container}>
            <div className={styles.homeContainer}>
              <iframe
                className={styles.iframe}
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.homeContainer}>
              <p>예고편이 존재하지 않습니다.</p>
            </div>
          </div>
        )}
      </>
    );
  }
}

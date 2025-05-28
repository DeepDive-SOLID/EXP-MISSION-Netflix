import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import { useDebounce } from "../../hooks/useDebounce";
import Nav from "../../components/Nav/Nav.jsx";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className={styles.searchContainer}>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className={styles.movie} key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className={styles.movieColumnPoster}
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className={styles.moviePoster}
                  />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    ) : (
      <section className={styles.noResults}>
        <div className={styles.noResultsText}>
          <p>
            찾고자하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return (
    <div className={styles.searchContent}>
      <Nav />
      {renderSearchResults()}
    </div>
  );
}

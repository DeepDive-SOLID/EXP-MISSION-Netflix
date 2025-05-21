import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        async function fetchData(movie) {
            try {
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
                );
                setMovie(movieResponse.data);
            } catch (err) {
                if (err.response?.status === 404) {
                    try {
                        const tvResponse = await axios.get(
                            `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=ko-KR`
                        );
                        setMovie(tvResponse.data);
                    } catch (tvErr) {
                        console.error("TV도 찾을 수 없음:", tvErr);
                    }
                } else {
                    console.error("알 수 없는 오류:", err);
                }
            }
        }
        fetchData(movie);
    }, [movieId]);

    if (!movie) return <div>...loading</div>;

    return (
        <section>
            <img
                className="modal__poster-img"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="poster"
            />
        </section>
    );
}

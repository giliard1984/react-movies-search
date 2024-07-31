import React, { useEffect, useContext } from "react";
import { Row, Col, Typography, Alert } from "antd";
import { SearchContext } from "../../contexts/SearchContext";
import { useDebounce } from "../../hooks/useDebounce";
import MovieCard from "../movieCard/MovieCard";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./MoviesList.module.scss";

const MoviesList: React.FC = () => {
  const {
    searchValue,
    totalPages,
    setTotalPages,
    movies,
    setMovies
  } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchValue, 500);

  const fetchMovies = (next = false) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
      },
    };

    const fetchingPage = next ? totalPages.page + 1 : 1;

    let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${fetchingPage}`;
    if (debouncedValue !== "" && debouncedValue) {
      url = `https://api.themoviedb.org/3/search/movie?sort_by=primary_release_date.desc&query=${debouncedValue}&include_adult=${!import.meta.env.VITE_BLOCKED_ADULT_CONTENT || "false"}&language=en-US&page=${fetchingPage}`;
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setTotalPages({
          page: response.page,
          totalPages: response.total_pages,
          totalResults: response.total_results
        });

        if (response?.page === 1) {
          setMovies(response.results.filter((movie: Movie) => movie.adult === !import.meta.env.VITE_BLOCKED_ADULT_CONTENT));
        } else {
          setMovies([
            ...movies,
            ...response.results.filter((movie: Movie) => movie.adult === !import.meta.env.VITE_BLOCKED_ADULT_CONTENT)
          ]);
        }
      })
      .catch((err) => console.error(err));
  };

  const hasMore = totalPages?.page < totalPages.totalPages;

  const fetchMore = () => {
    fetchMovies(true);
  };

  useEffect(() => {
    fetchMovies();
  }, [debouncedValue]);

  return (
    <>
      <InfiniteScroll
        dataLength={movies?.length} // This is important field to render the next data
        next={fetchMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            You're all caught up. No worries, it is not the end of the road.
          </p>
        }
        style={{ overflow: "hidden" }}
      >
        <Row
          gutter={[15, 30]}
          justify="start"
          align="middle"
        >
          <Col span={24} style={{ textAlign: "left" }}>
            <Typography.Title level={2}>
              {debouncedValue === "" || !debouncedValue ? "Now Playing" : "Filtered Movies"}
            </Typography.Title>
            <span className={styles.descriptive}>There are {totalPages.totalResults} titles available.</span>
          </Col>
          {movies?.map((movie: Movie, index: number) => {
            return (
              <Col key={`movie-${movie?.id}`} span={6}>
                <motion.div
                  key={`movie-wrapper-${movie.id}`}
                  initial={{
                    x: -20,
                    y: 0,
                    opacity: 0 
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1
                  }}
                  transition={{
                    delay: (index * 0.05) / (totalPages?.page || 1),
                    duration: 0.15,
                    ease: "easeIn"
                  }}
                >
                  <MovieCard data={movie} />
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default MoviesList;

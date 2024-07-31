// this context api is responsible for managing the main
// information related to the search engine
import { createContext, useState } from "react";

const defaultTotalPages = {
  page: 1,
  totalPages: 1,
  totalResults: 0
};

const SearchContext = createContext({
  searchValue: "",
  setSearchValue: (_value: string) => {},
  totalPages: defaultTotalPages,
  setTotalPages: (_totalPages: TotalPages) => {},
  movies: [] as Movie[],
  setMovies: (_movies: Movie[]) => {},
 });

const SearchProvider = ({ children }: any) => {
  const [searchValue, setSearchValue] = useState(""); // state that keeps the typed information (input)
  const [movies, setMovies] = useState<Movie[]>([]); // movies retrieved are stored in this state

  // keeps the main information returned by TMDB, related to the number of pages
  // still available (awaiting to be consumed), based on the passed arguments
  const [totalPages, setTotalPages] = useState<TotalPages>(defaultTotalPages);
  
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        totalPages,
        setTotalPages,
        movies,
        setMovies
      }}
    >
      {children}
    </SearchContext.Provider>
  );
 };
 
 export { SearchContext, SearchProvider };

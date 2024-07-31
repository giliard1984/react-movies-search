type Movie = {
  id: number
  adult: boolean
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  backdrop_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  genre_ids: number[]
  original_title: string
};

type TotalPages = {
  page: number
  totalPages: number
  totalResults: number
}

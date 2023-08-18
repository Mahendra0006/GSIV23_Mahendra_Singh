export interface Moviedata {
  id?: number
  original_title: string
  overview: string
  vote_average: number
  poster_path: string
  e?: any
}

export interface HeaderProps {
  onClick?: () => void
  setSearch?: (search: string) => void
  title: string
}

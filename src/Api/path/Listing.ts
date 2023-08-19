import interceptor from '../interceptor'
import { Moviedata } from '@/utils/index'

const upcomingMovies = async (body: Moviedata) => {
  const response = await interceptor('/movie/upcoming', 'GET', body)
  return response
}

const searchMovies = async (body: Moviedata) => {
  const response = await interceptor('/search/movie', 'GET', body)
  return response
}

const movieDetail = async (body: Moviedata) => {
  const response = await interceptor('/movie/' + body?.id, 'GET', body)
  return response
}

export { upcomingMovies, movieDetail, searchMovies }

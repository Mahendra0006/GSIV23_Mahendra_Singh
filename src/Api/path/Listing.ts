import interceptor from '../interceptor'

const upcomingMovies = async (body: any) => {
  const response = await interceptor('/movie/upcoming', 'GET', body)
  console.log('API_RESPONSE', response)
  return response
}

const searchMovies = async (body: any) => {
  const response = await interceptor('/search/movie', 'GET', body)
  console.log('API_RESPONSE', response)
  return response
}

const movieDetail = async (body: any) => {
  const response = await interceptor('/movie/' + body?.id, 'GET', body)
  console.log('API_RESPONSE', response)
  return response
}

export { upcomingMovies, movieDetail, searchMovies }

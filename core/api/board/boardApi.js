import { defaultClient } from '@/core/config'

export function boardList() {
	return defaultClient.get('/list_movies.json')
}

export function boardDetail(movieId) {
	return defaultClient.get(`/movie_details.json?movie_id=${movieId}`)
}

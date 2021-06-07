import { defaultClient } from '@/core/config/axios'

export function getBoardList() {
	return defaultClient.get('/list_movies.json')
}

export function getBoardDetail(movieId) {
	return defaultClient.get(`/movie_details.json?movie_id=${movieId}`)
}

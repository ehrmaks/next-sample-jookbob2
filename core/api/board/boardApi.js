import { defaultClient } from '@/core/config/axios'

export async function getBoardList() {
	const response = await defaultClient.get('/list_movies.json')
	return response.data.data
}

export async function getBoardDetail(movieId) {
	const response = await defaultClient.get(`/movie_details.json?movie_id=${movieId}`)
	return response.data.data
}

export const FETCH_LESSON = 'FETCH_LESSON'

export function fetchLesson(id) {
	return {
		type:FETCH_LESSON,
		id
	}
}
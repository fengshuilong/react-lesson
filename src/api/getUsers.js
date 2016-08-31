export function getUsers(userName) {
	return fetch(`https://api.github.com/search/users?q=${userName}`).then(res=>res.json())
}
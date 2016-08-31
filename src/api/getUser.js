export function getUser(login) {
	return fetch(`https://api.github.com/users/${login}`).then(res=>res.json())
}
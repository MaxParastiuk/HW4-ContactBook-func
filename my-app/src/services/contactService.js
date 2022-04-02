const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts/";

export function getContactsList() {
	return fetch(URL).then((res) => res.json());
}

export function createContact(contact) {
	return fetch(URL, {
		method: "POST",
		body: JSON.stringify(contact),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
}

export function updateContact(contact) {
	return fetch(URL, {
		method: "PUT",
		body: JSON.stringify(contact),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
}

export function deleteContact(id) {
	return fetch(URL + id, {
		method: "DELETE",
	}).then((res) => res.json());
}

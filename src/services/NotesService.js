import httpClient from "../http-common";

const getAll = () => {
	return httpClient.get("/notes");
}

const addNote = (note) => {
	return httpClient.post("/createNote", note);
}

export default { getAll, addNote };
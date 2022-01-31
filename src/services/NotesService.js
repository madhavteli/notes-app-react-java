import httpClient from "../http-common";

const getAll = () => {
	return httpClient.get("/notes");
}

const addNote = (note) => {
	return httpClient.post("/createNote", note);
}

const readNote = (id) => {
	return httpClient.get(`/note/${id}`);
}

const deleteNote = ( id ) => {
	return httpClient.delete(`/note/${id}`);
}

export default { getAll, addNote, readNote, deleteNote };
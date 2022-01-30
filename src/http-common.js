import axios from "axios";

export default axios.create({
	// baseURL: "http://localhost:8080/api",
	baseURL: "https://notes-app-java.herokuapp.com/api",
	headers:{
		"Content-type":"application/json"
	}
})
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import NotesService from "../services/NotesService";

const AddNote = () => {

	const[title, setTitle] = useState('');
	const[body, setBody] = useState('');
	const[category, setCategory] = useState('Programming');

	const history = useNavigate();

	const addNoteHandler = event => {
		event.preventDefault();
		const data = {title, body, category};
		NotesService.addNote(data).then((res)=>{
			console.log(res.data);
			history("/");

		}).catch(error=>{
			console.log("Something went wrong ", error);
		})
	}

	return(
		<div>
			<div className="create">
				<form>
					<div className="form-group">
						<label>Title: </label>
						<input type="text"
						       id="title"
						       value={title}
						       onChange={event => setTitle(event.target.value)}
						       className="form-control"/>
					</div>
					<div className="form-group">
						<label>Body: </label>
						<textarea
							className="form-control"
							id="note_body"
							value={body}
							onChange={event => setBody(event.target.value)}>
						</textarea>
					</div>
					<div className="form-group">
						<label>Category: </label>
						<select
							className="form-control"
							value={category}
							onChange={event => setCategory(event.target.value)}>
							<option>Programming</option>
							<option>Interview</option>
							<option>Vacation</option>
							<option>Meeting</option>
						</select>
					</div>
					<div className="form-group">
						<button onClick={addNoteHandler}>Add Note</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddNote;
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesService from "../services/NotesService";

const AddNote = () => {

	const[title, setTitle] = useState('');
	const[body, setBody] = useState('');
	const[category, setCategory] = useState('Programming');
	const[error, setError] = useState( false );

	const history = useNavigate();
	const {id} = useParams();

	const addNoteHandler = event => {
		event.preventDefault();
		if( !title || !body ) {
			setError( true );
			return;
		} else {
			setError( false );
		}
		const data = {title, body, category, id};
		if( id ) {
			NotesService.updateNote( data ).then( ( response ) => {
				console.log( "Note Updated successfully" );
				console.log( response.data );
				history( "/" );
			}).catch( ( error ) => {
				console.log( "Something went wrong", error );
			} )
		}
		NotesService.addNote( data ).then( ( res ) => {
			console.log( "Note added successfully " );
			console.log( res.data );
			history( "/" );

		}).catch( error => {
			console.log( "Something went wrong ", error );
		})
	}

	useEffect(()=> {
		if( id ) {
			NotesService.readNote(id).then((note)=>{
				setTitle(note.data.title);
				setBody(note.data.body);
				setCategory(note.data.category);
			}).catch((error) => {
				console.log("Something went wrong", error);
			})
		}
	}, [])

	return(
		<div>
			<div className="create">
				<div className="text-center">
					<h5>{id ? "Update Note" : "Add Note"}</h5>
					{error &&  <span style={{color:"red", fontStyle:"italic"}}>Please enter required fields</span>}
				</div>
				<form>
					<div className="form-group">
						<label>Title: <sup>*</sup></label>
						<input type="text"
						       id="title"
						       value={title}
						       onChange={event => setTitle(event.target.value)}
						       className="form-control"/>
					</div>
					<div className="form-group">
						<label>Body: <sup>*</sup></label>
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
					<div className="form-group text-center mt-3">
						<button onClick={addNoteHandler}>{id ? "Update" : "Add"}</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddNote;
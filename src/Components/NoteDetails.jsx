import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NotesService from "../services/NotesService";
import Moment from "react-moment";

const NoteDetails = () => {

	const {id} = useParams();
	const [note, setNote] = useState('');
	const history = useNavigate();

	useEffect(()=>{
		NotesService.readNote(id).then(note=>{
			setNote(note.data);
		}).catch((error) => {
			console.log('Something went wrong', error);
		})
	},[])

	const deleteClickHandler = () => {
		NotesService.deleteNote(id).then(()=>{
			console.log("Note deleted succesfully!");
			history("/");
		}).catch((error)=>{
			console.log(error);
		})
	}

	const editNoteHandler = () => {
		history(`/updateNote/${id}`);
	}

	return(
		<div className="note-details main-content">
			{
				note &&
				<div>
					<article>
						<h5 className="text-capitalize primary-color">{note.title}</h5>
						<div className="mb-3 fst-italic metadata">
							<Moment fromNow>{note.updated_at}</Moment>
							<span className="text-capitalize">, {note.category}</span>
						</div>
						<div className="mb-3">{note.body}</div>
					</article>
					<button onClick={editNoteHandler}>Edit</button>
					<button onClick={deleteClickHandler} className="ms-3">Delete</button>
				</div>
			}
		</div>
	)
}

export default NoteDetails;
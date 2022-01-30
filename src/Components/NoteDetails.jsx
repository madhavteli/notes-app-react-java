import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import NotesService from "../services/NotesService";

const NoteDetails = () => {

	const {id} = useParams();
	const [note, setNote] = useState('');

	useEffect(()=>{
		NotesService.readNote(id).then(note=>{
			setNote(note.data);
		}).catch((error) => {
			console.log('Something went wrong', error);
		})
	},[])

	return(
		<div className="note-details main-content">
			<article>
				<h5 className="text-capitalize primary-color">{note.title}</h5>
				<div className="mb-3 font-italic metadata">
					<span>{note.updated_at}</span>
					<span className="text-capitalize">, {note.category}</span>
				</div>
				<div className="mb-3">{note.body}</div>
			</article>
		</div>
	)
}

export default NoteDetails;
import {useState, useEffect} from "react";
import NotesService from "../services/NotesService";
import {Link} from "react-router-dom";
import Moment from "react-moment";

;


const ListNotes = () => {

	const [notes, setNotes] = useState([]);

	useEffect(()=>{
		NotesService.getAll()
			.then(response=>{
				setNotes(response.data);
			})
			.catch(error=>{
				console.log(error);
			})
	}, []);

	return(
		<div className="main-content">
			<h4>List of notes</h4>
			<div className="notes-list mt-4">
				{
					notes.length > 0 ? notes.map(note=>(
						<div key={note.id} className="notes-preview mt-3">
							<Link to={`/note/${note.id}`}>
								<h5 className="primary-color text-capitalize">{note.title}</h5>
								<Moment fromNow className="fst-italic">{note.updated_at}</Moment>
							</Link>
						</div>
					)) : <h1>No Notes Found! </h1>
				}
			</div>
		</div>
	);
}

export default ListNotes;
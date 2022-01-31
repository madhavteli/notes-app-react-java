import ListNotes from "./Components/ListNotes";
import {BrowserRouter, Route,Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import "./index.css";
import AddNote from "./Components/AddNote";
import NoteDetails from "./Components/NoteDetails";

function App() {
return (
    <BrowserRouter>
        <div>
            <Navbar/>
            <div>
                <Routes>
                    <Route path="/" element={<ListNotes/>}/>
                    <Route path="/add" element={<AddNote/>}/>
                    <Route path="/updateNote/:id" element={<AddNote/>}/>
                    <Route path="/note/:id" element={<NoteDetails/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
        </div>
        </div>
    </BrowserRouter>
);
}

export default App;

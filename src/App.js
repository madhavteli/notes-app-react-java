import ListNotes from "./Components/ListNotes";
import {BrowserRouter, Route,Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Navbar/>
              <div>
                  <Routes>
                      <Route path="/" element={<ListNotes/>}/>
                      <Route exact path="*" element={<NotFound/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import BuscarPokemon from "./views/BuscarPokemon";
import Pokemones from "./views/Pokemones";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/" element={<BuscarPokemon />} />
            <Route path="/pokemon/:name" element={<Pokemones />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

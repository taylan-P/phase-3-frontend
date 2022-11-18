import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./views/Feed"
// import Landing from "./views/Landing";
// import About from "./views/About";
// import Pokedex from "./views/Pokedex";
// import MyPokemon from "./views/MyPokemon";
// import PokemonDetail from "./views/PokemonDetail";
// import Error from "./views/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}
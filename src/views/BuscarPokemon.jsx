import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Row, Button } from "react-bootstrap";

const BuscarPokemon = () => {

const [pokemones, setPokemones] = useState([]);
const [nombre, setNombre] = useState("");

const navigate = useNavigate()

useEffect(() => {

   const getAPI = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const datos = await resp.json();

      if (datos && datos.results) {
       const pokeName = datos.results.map(({name}) => ({name}))
       setPokemones(pokeName);
      }
   }

   getAPI();

}, [])



const handleName = (event) => {
   const namePokemon =  event.target.value;
   if (namePokemon && namePokemon !== "") {
      setNombre(namePokemon)
   }
}

const MostrarPokemon = () => {
   navigate(`/pokemon/${nombre}`);
}

return (
   <>
      <Container className=" p-5 bg-blanco">
         <Row className="text-center">
               <h1>Buscador de Pokemon</h1>
               <select onChange={handleName}>
                  <option value="">Seleccione un Pokemón</option>
                  {pokemones.map((pokemon) => (
                     <option key={pokemon.name}>{pokemon.name}</option>
                  ))}
               </select>
               <Button variant="primary" className="mt-3" onClick={MostrarPokemon}>Buscar Pokemon</Button>
         </Row>
      </Container> 
   </>    
)

};

export default BuscarPokemon
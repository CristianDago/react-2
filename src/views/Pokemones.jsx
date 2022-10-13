import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container,Row, Col} from "react-bootstrap";

const Pokemones = () => {

    const [poke, setPoke] = useState(null);
    
    const {name} = useParams();

    useEffect(() => {
        const getAPI = async () => {
           const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
           const datos = await resp.json();
           setPoke(datos)
        }
     
        getAPI();
     
     }, [])
    
    return(
        <>
            <Container className=" p-5 bg-blanco">
                <Row className="text-center">
                    <Col></Col>
                    <Col>
                    
                        {poke && (      
                        <>
                            <h1>Nombre: <strong className="amarillo">{name}</strong></h1>
                            <img className="pokemon" src={poke.sprites.front_default} alt="" />
                            <h2>{poke.stats[0].stat.name} :  <strong className="amarillo">{poke.stats[0].base_stat}</strong></h2>
                            <h2>{poke.stats[1].stat.name} :  <strong className="amarillo">{poke.stats[1].base_stat}</strong></h2>
                            <h2>{poke.stats[2].stat.name} :  <strong className="amarillo">{poke.stats[2].base_stat}</strong></h2>
                            <h2>{poke.stats[3].stat.name} :  <strong className="amarillo">{poke.stats[3].base_stat}</strong></h2>
                            <h2>{poke.stats[4].stat.name} :  <strong className="amarillo">{poke.stats[4].base_stat}</strong></h2>
                            <h2>{poke.stats[5].stat.name} :  <strong className="amarillo">{poke.stats[5].base_stat}</strong></h2>
                            <h2><strong className="rojo">{poke.types[0].type.name}</strong></h2>
                        </>
                        )}
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>  
        </> 
    )

}

export default Pokemones; 
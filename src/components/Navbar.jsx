import { Col, Container,Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style.css";
import PokemonImg from "../components/img/pokemon_go.png"


export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
return (
    <>
        <Container className="bg-azul p-3">
            <Row>
                <Col>
                <img className="logo" src={PokemonImg}/>
                </Col>
                <Col className="text-right p-3">
                    <NavLink className={ setActiveClass } end to="/">
                        Home
                    </NavLink>
                    {" - "}
                    <NavLink className={ setActiveClass } to="/pokemon">
                        Pokemones
                    </NavLink>
                </Col>
            </Row>   
        </Container>        
    </>
 );
}
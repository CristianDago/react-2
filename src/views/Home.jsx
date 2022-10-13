import { Container,Row, Col } from "react-bootstrap";
import MaestroImg from "../components/img/maestro.jpg"

const Home = () => {

return (
        <>
            <Container className=" p-5 bg-blanco">
                <Row className="text-center">
                        <Col>
                            <h1>Bienvenido maestro <strong className="amarillo">Pokemón</strong></h1> 
                            <img className="maestro" src={MaestroImg}/>
                        </Col>
                </Row>
            </Container> 
        </>   
)   

}

export default Home;
import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

 export default () => {
    return (
        <Container className="text-center pt-5">
            <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
            <Contacto />    

        </Container>
    );
 };
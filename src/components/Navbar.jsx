import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
        <Navbar style={{background: "#EE5252"}}>
            <Container className="justify-content-space-between fs-5">
                <div className="links ms-3">
                <Link to="/home" className="text-white ms-3 text-decoration-none"> 🏠 Home</Link>
                <Link to="/contacto" className="text-white ms-3 text-decoration-none"> 📙 Contacto</Link>
                </div>
                <div className="brand">
                <Navbar className="text-white"> Happy Cake 🎂 </Navbar>
                </div>
            </Container>

        </Navbar>
        </>
    )
};
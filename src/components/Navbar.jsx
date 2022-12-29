import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
        <Navbar style={{background: "radial-gradient(at center center, rgb(253, 164, 175), rgb(244, 63, 94))"}}>
            <Container className="justify-content-space-between fs-5">
                <div className="links ms-3">
                <Link to="/" className="text-white ms-3 text-decoration-none"> 🏠 Home</Link>
                <Link to="/contacto" className="text-white ms-3 text-decoration-none"> 📙 Contacto</Link>
                </div>
                <div className="brand">
                <Navbar className="text-white"> Happy Cake 🍰 </Navbar>
                </div>
            </Container>

        </Navbar>
        </>
    )
};
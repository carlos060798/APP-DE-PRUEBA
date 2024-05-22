import { Outlet } from "react-router-dom"
import NavbarAdmin from "../pages/NavbarAdmin";
import { Container } from "react-bootstrap";


function AdminLayaut() {
    return ( <>
    <NavbarAdmin />
    <Container>
    <Outlet /> 
    </Container>

    </> );
}

export default AdminLayaut;


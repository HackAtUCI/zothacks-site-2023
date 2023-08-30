import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { nav, home, resources, schedule } from "./NavBar.module.scss";

export default function NavBar() {
	return (
		<Navbar expand="sm" className={`bg-body-tertiary ${nav}`}>
			<Container fluid>
				<Navbar.Brand></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto h5">
						<Nav.Link href="#home" className={home}>
							Home
						</Nav.Link>
						<Nav.Link href="#resources" className={resources}>
							Resources
						</Nav.Link>
						<Nav.Link href="#schedule" className={schedule}>
							Schedule
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

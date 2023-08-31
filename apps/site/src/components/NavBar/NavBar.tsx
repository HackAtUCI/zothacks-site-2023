import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavBar.module.scss";

export default function NavBar() {
	return (
		<Navbar expand="sm" className={`bg-body-tertiary ${styles.nav}`}>
			<Container fluid>
				<Navbar.Brand></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home" className={styles.home}>
							Home
						</Nav.Link>
						<Nav.Link href="#resources" className={styles.resources}>
							Resources
						</Nav.Link>
						<Nav.Link href="#schedule" className={styles.schedule}>
							Schedule
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

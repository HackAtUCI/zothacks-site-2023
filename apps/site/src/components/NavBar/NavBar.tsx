"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./NavBar.module.scss";
import Link from "next/link";

export default function NavBar() {
	return (
		<Navbar expand="sm" className={`bg-body-tertiary ${styles.nav}`}>
			<Container fluid>
				<Navbar.Brand></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Link href="/" className={styles.home}>
							Home
						</Link>
						<Link href="/resources" className={styles.resources}>
							Resources
						</Link>
						<Link href="/schedule" className={styles.schedule}>
							Schedule
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

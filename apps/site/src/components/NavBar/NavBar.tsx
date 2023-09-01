"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./NavBar.module.scss";

export default function NavBar() {
	const activeRoute = usePathname();

	return (
		<Navbar expand="sm" className={`bg-body-tertiary ${styles.nav}`}>
			<Container fluid>
				<Navbar.Brand></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Link
							href="/"
							className={
								activeRoute === "/" ? styles.homeActive : styles.homeNotActive
							}
						>
							Home
						</Link>
						<Link
							href="/resources"
							className={
								activeRoute === "/resources"
									? styles.resourcesActive
									: styles.resourcesNotActive
							}
						>
							Resources
						</Link>
						<Link
							href="/schedule"
							className={
								activeRoute === "/schedule"
									? styles.scheduleActive
									: styles.scheduleNotActive
							}
						>
							Schedule
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

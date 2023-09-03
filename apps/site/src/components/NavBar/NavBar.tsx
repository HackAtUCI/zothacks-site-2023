"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import ZotHacksLogo from "@/assets/icons/zothacks-logo.svg";

import styles from "./NavBar.module.scss";

export default function NavBar() {
	const activeRoute = usePathname();

	return (
		<Navbar expand="md" className={`bg-body-tertiary ${styles.nav}`}>
			<Container fluid>
				<Navbar.Brand>
					<Link href="/">
						<div className={styles.logo}>
							<Image
								src={ZotHacksLogo.src}
								alt="ZotHacks Logo"
								// width="300"
								// height="300"
								fill
								// className={"img-fluid"}
							/>
						</div>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto text-center">
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

"use client";

import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import BookmarkLink from "@/components/BookmarkLink/BookmarkLink";
import tape from "@/assets/images/tape.svg";

import styles from "./Mentor.module.scss";

const MENTOR_APP_URL = "/mentor";

export default function Mentor() {
	const mentorHeader = (
		<h2 className="mb-3 text-start">Interested in becoming a mentor?</h2>
	);
	const mentorDescription = (
		<p>
			Have a knack for innovation? Interested in inspiring the next generation
			of developers? Mentor applications for ZotHacks 2023 have closed, but
			please keep an eye out for future events!
		</p>
	);

	return (
		<Container as="section">
			<div className="position-relative my-5">
				<Col lg={5} className={styles.applySticky}>
					<Image src={tape} alt="post-it tape" className={styles.tape} />
					<div className={styles.applyStickyContent}>
						{mentorHeader}
						{mentorDescription}
					</div>
				</Col>
				<Col className={styles.descSticky + " text-center"}>
					{mentorDescription}
				</Col>
			</div>
		</Container>
	);
}

"use client";
// import ApplyButton from "@/assets/images/ApplyButton.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AboutSection from "./AboutSection";
import MentorSection from "./MentorSection";
import SponsorSection from "./SponsorSection";
import FAQSection from "./FAQSection";
import styles from "./Landing.module.scss";

export default function Landing() {
	return (
		<main>
			<Container className="justify-content-center text-center">
				<Row>
					<h1>ZotHacks 2023</h1>
				</Row>
				<Row>
					<div className={styles.applyButtonContainer}>
						<Button
							as="a"
							className={styles.applyButton}
							href="https://hack.ics.uci.edu/" // TODO Change to application site link
						>
							<h2 className={styles.applyButtonText}>Apply!</h2>
						</Button>
					</div>
				</Row>
				<Row>
					<AboutSection />
				</Row>
				<Row>
					<MentorSection />
				</Row>
				<Row>
					<SponsorSection />
				</Row>
				<Row>
					<FAQSection />
				</Row>
			</Container>
		</main>
	);
}

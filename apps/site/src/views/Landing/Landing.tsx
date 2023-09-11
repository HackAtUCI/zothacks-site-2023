"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ApplyButton from "./components/ApplyButton/ApplyButton";
import AboutSection from "./components/AboutSection/AboutSection";
import MentorSection from "./components/MentorSection/MentorSection";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import FAQSection from "./components/FAQSection/FAQSection";
import styles from "./Landing.module.scss";

export default function Landing() {
	return (
		<main>
			<Container className="justify-content-center text-center">
				<Row>
					<h1>ZotHacks 2023</h1>
				</Row>
				<Row>
					<ApplyButton />
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

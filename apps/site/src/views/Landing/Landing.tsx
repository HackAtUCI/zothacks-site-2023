"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ApplyButton from "./sections/ApplyButton/ApplyButton";
import AboutSection from "./sections/About/About";
import MentorSection from "./sections/Mentor/Mentor";
import SponsorSection from "./sections/Sponsor/Sponsor";
import FAQSection from "./sections/FAQ/FAQ";
import styles from "./Landing.module.scss";

export default function Landing() {
	return (
		<main>
			<Container className="justify-content-center text-center">
				<h1>ZotHacks 2023</h1>
				<ApplyButton />
				<AboutSection />
				<MentorSection />
				<SponsorSection />
				<FAQSection />
			</Container>
		</main>
	);
}

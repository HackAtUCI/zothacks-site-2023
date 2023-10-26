"use client";

import Image from "next/image";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import clip from "@/assets/images/clip.svg";

import styles from "./ClipboardSchedule.module.scss";

function ClipboardSchedule() {
	return (
		<Container
			as="section"
			className={styles.clipboard + " px-0 position-relative"}
		>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<h2 className="mb-5">Countdown Timer</h2>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0" className={styles.accordionItem}>
					<Accordion.Header as="div" className={styles.accordionHeader}>
						<Row className="w-100 justify-content-between align-items-center">
							<Col sm="auto">
								<h3 className="text-start">Event Name</h3>
							</Col>
							<Col sm="auto" className="me-3">
								<span>DBH 4011, 1-2pm</span>
							</Col>
						</Row>
					</Accordion.Header>
					<Accordion.Body>Placeholder text</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1" className={styles.accordionItem}>
					<Accordion.Header as="div" className={styles.accordionHeader}>
						<Row className="w-100 justify-content-between align-items-center">
							<Col sm="auto">
								<h3 className="text-start">Event Name</h3>
							</Col>
							<Col sm="auto" className="me-3">
								<span>DBH 4011, 1-2pm</span>
							</Col>
						</Row>
					</Accordion.Header>
					<Accordion.Body>Placeholder text</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2" className={styles.accordionItem}>
					<Accordion.Header as="div" className={styles.accordionHeader}>
						<Row className="w-100 justify-content-between align-items-center">
							<Col sm="auto">
								<h3 className="text-start">Event Name</h3>
							</Col>
							<Col sm="auto" className="me-3">
								<span>DBH 4011, 1-2pm</span>
							</Col>
						</Row>
					</Accordion.Header>
					<Accordion.Body>Placeholder text</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3" className={styles.accordionItem}>
					<Accordion.Header as="div" className={styles.accordionHeader}>
						<Row className="w-100 justify-content-between align-items-center">
							<Col sm="auto">
								<h3 className="text-start">Event Name</h3>
							</Col>
							<Col sm="auto" className="me-3">
								<span>DBH 4011, 1-2pm</span>
							</Col>
						</Row>
					</Accordion.Header>
					<Accordion.Body>Placeholder text</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}

export default ClipboardSchedule;

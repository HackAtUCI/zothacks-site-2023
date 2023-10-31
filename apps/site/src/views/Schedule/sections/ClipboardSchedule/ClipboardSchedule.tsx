"use client";

import Image from "next/image";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import clip from "@/assets/images/clip.svg";

import styles from "./ClipboardSchedule.module.scss";

interface ClipboardScheduleProps {
	schedule: {
		host: string;
		title: string;
		description: JSX.Element;
		location: JSX.Element;
		category: JSX.Element;
		startTime: string;
		endTime: string;
	}[];
}

function ClipboardSchedule({ schedule }: ClipboardScheduleProps) {
	return (
		<Container
			as="section"
			className={styles.clipboard + " px-0 position-relative"}
		>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<h2 className="mb-5">Countdown Timer</h2>
			<Accordion defaultActiveKey="0" className={styles.accordion}>
				{schedule.map(
					(
						{
							title,
							description,
							location,
							host,
							category,
							startTime,
							endTime,
						},
						index,
					) => (
						<Accordion.Item
							key={title}
							eventKey={`${index}`}
							className={styles.accordionItem}
						>
							<Accordion.Header className={styles.accordionHeader}>
								<h3>{title}</h3>
								<span>{host}</span>
								{category}
								<span className="text-end ms-auto">
									{location}, {new Date(startTime).toLocaleDateString()} -{" "}
									{new Date(endTime).toLocaleDateString()}
								</span>
							</Accordion.Header>
							<Accordion.Body>{description}</Accordion.Body>
						</Accordion.Item>
					),
				)}
			</Accordion>
		</Container>
	);
}

export default ClipboardSchedule;

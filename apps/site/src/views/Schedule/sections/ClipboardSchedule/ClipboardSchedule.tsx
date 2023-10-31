"use client";

import Image from "next/image";

import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import clip from "@/assets/images/clip.svg";

import styles from "./ClipboardSchedule.module.scss";

interface ClipboardScheduleProps {
	schedule: {
		title: string;
		location?: string | undefined;
		virtual?: string | undefined;
		startTime: Date;
		endTime: Date;
		organization?: string | undefined;
		hosts?: string[] | undefined;
		description: JSX.Element;
	}[][];
}

const dateTimeFormat = new Intl.DateTimeFormat("en", {
	hour: "numeric",
	minute: "numeric",
});

function ClipboardSchedule({ schedule }: ClipboardScheduleProps) {
	return (
		<Container
			as="section"
			className={styles.clipboard + " px-0 position-relative"}
		>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<Accordion defaultActiveKey="0" className={styles.accordion}>
				{schedule.map((day, i) => (
					<div key={i}>
						<h2 className={styles.date}>
							{day[0].startTime.toLocaleDateString()}
						</h2>
						{day.map(
							({ title, description, location, hosts, startTime, endTime }) => (
								<Accordion.Item
									key={title}
									eventKey={title}
									className={styles.accordionItem}
								>
									<Accordion.Header>
										<Row className="w-100">
											<Col lg>
												<h3 className={styles.eventTitle}>{title}</h3>
											</Col>
											{/* <span>{hosts?.join()}</span> */}

											<Col lg className={styles.mobileLocation}>
												<span>
													{location},{" "}
													{dateTimeFormat.formatRange(startTime, endTime)}
												</span>
											</Col>
										</Row>
									</Accordion.Header>
									<Accordion.Body>{description}</Accordion.Body>
								</Accordion.Item>
							),
						)}
					</div>
				))}
			</Accordion>
		</Container>
	);
}

export default ClipboardSchedule;

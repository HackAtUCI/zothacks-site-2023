"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

const monthDayFormat = new Intl.DateTimeFormat("en", {
	month: "long",
	day: "numeric",
});

const weekdayFormat = new Intl.DateTimeFormat("en", {
	weekday: "long",
});

const variant: Variants = {
	initial: {
		y: 200,
	},
	animate: {
		y: 0,
	},
};

function ClipboardSchedule({ schedule }: ClipboardScheduleProps) {
	return (
		<Container as="section" className={" px-0 pt-0 position-relative"}>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<div className={styles.clipboard}>
				<motion.div
					className={styles.clipboardPaper}
					variants={variant}
					initial="initial"
					animate="animate"
				>
					<Accordion defaultActiveKey="0" className={styles.accordion}>
						{schedule.map((day, i) => (
							<div key={i}>
								<h2 className="mt-5">
									{weekdayFormat.format(day[0].startTime)}
								</h2>
								<p className="text-center mb-5 h3">
									{monthDayFormat.format(day[0].startTime)}
								</p>
								{day.map(
									({
										title,
										description,
										location,
										hosts,
										startTime,
										endTime,
									}) => (
										<Accordion.Item
											key={title}
											eventKey={title}
											className={styles.accordionItem}
										>
											<Accordion.Header as="h3">
												<Row className="w-100 align-items-center">
													<Col lg>
														<span className={styles.eventTitle + " h3 mb-0"}>
															{title}
														</span>
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
				</motion.div>
			</div>
		</Container>
	);
}

export default ClipboardSchedule;

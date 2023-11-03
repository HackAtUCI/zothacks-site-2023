"use client";

import Image from "next/image";
import { cubicBezier, motion, Variants } from "framer-motion";

import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import clip from "@/assets/images/clip.svg";

import styles from "./ClipboardSchedule.module.scss";
import Countdown from "../../components/Countdown/Countdown";

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
		transformOrigin: "top center",
		rotateX: 20,
	},
	animate: {
		y: 0,
		rotateX: 0,
		transition: {
			duration: 0.7,
			ease: cubicBezier(0.85, 0, 0.15, 1),
		},
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
					<Countdown />
					<Accordion defaultActiveKey="0" className={styles.accordion}>
						{schedule.map((day, i) => (
							<div key={i}>
								<h2 className="mt-5">
									{weekdayFormat.format(
										utcToZonedTime(day[0].startTime, "America/Los_Angeles"),
									)}
								</h2>
								<p className="text-center mb-5 h3">
									{monthDayFormat.format(
										utcToZonedTime(day[0].startTime, "America/Los_Angeles"),
									)}
								</p>
								{day.map(
									({
										title,
										description,
										location,
										hosts,
										startTime,
										endTime,
									}) => {
										const startTimeZoned = utcToZonedTime(
												startTime,
												"America/Los_Angeles",
											),
											endTimeZoned = utcToZonedTime(
												endTime,
												"America/Los_Angeles",
											);
										return (
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
																{dateTimeFormat.formatRange(
																	startTimeZoned,
																	endTimeZoned,
																)}
															</span>
														</Col>
													</Row>
												</Accordion.Header>
												<Accordion.Body>{description}</Accordion.Body>
											</Accordion.Item>
										);
									},
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

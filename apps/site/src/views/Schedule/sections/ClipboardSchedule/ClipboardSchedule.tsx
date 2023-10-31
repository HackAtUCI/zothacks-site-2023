"use client";

import Image from "next/image";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

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

const WEEKDAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function ClipboardSchedule({ schedule }: ClipboardScheduleProps) {
	return (
		<Container
			as="section"
			className={styles.clipboard + " px-0 pt-5 position-relative"}
		>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<Accordion defaultActiveKey="0" className={styles.accordion}>
				{schedule.map((day, i) => (
					<div className="mt-5" key={i}>
						<h2>{WEEKDAYS[day[0].startTime.getDay()]}</h2>
						<h3 className="text-center mb-5">
							{day[0].startTime.toLocaleDateString()}
						</h3>
						{day.map(
							({ title, description, location, hosts, startTime, endTime }) => (
								<Accordion.Item
									key={title}
									eventKey={title}
									className={styles.accordionItem}
								>
									<Accordion.Header className={styles.accordionHeader}>
										<h3 className={styles.eventTitle}>{title}</h3>
										{/* <span>{hosts?.join()}</span> */}
										<span className="text-end ms-auto">
											{location},{" "}
											{dateTimeFormat.formatRange(startTime, endTime)}
										</span>
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

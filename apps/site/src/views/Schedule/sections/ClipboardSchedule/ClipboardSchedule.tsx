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
				{schedule.map((day, i) => (
					<div key={i}>
						<h2>{day[0].startTime.toLocaleDateString()}</h2>
						{day.map(
							({ title, description, location, hosts, startTime, endTime }) => (
								<Accordion.Item
									key={title}
									eventKey={title}
									className={styles.accordionItem}
								>
									<Accordion.Header className={styles.accordionHeader}>
										<h3>{title}</h3>
										<span>{hosts?.join()}</span>
										<span className="text-end ms-auto">
											{location}, {new Date(startTime).toLocaleDateString()} -{" "}
											{new Date(endTime).toLocaleDateString()}
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

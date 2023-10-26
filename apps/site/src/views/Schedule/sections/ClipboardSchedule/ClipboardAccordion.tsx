"use client";

import Accordion from "react-bootstrap/Accordion";
import styles from "./ClipboardSchedule.module.scss";
import type { Event } from "./ClipboardSchedule";

interface ClipboardAccordion {
	faq: Event[];
}

export default function ClipboardAccordion({ faq }: ClipboardAccordion) {
	return (
		<Accordion className={styles.accordion} alwaysOpen>
			{faq.map(({ eventName, description, locationTime }, index) => (
				<Accordion.Item
					key={eventName}
					className={styles.accordionBorder}
					eventKey={eventName}
				>
					<Accordion.Header>
						<p className={styles.eventName}>{eventName}</p>
						<p className={styles.locationTime}>{locationTime}</p>
					</Accordion.Header>
					<Accordion.Body className={styles.description}>
						{description}
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

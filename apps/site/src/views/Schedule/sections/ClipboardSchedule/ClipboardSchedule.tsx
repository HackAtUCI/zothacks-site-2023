import Container from "react-bootstrap/Container";
import ClipboardAccordion from "./ClipboardAccordion";
import styles from "./ClipboardSchedule.module.scss";

type Event = {
	eventName: string;
	description: string;
	locationTime: string;
};

const FRIDAYEVENTS: Event[] = [
	{
		eventName: "Event Name",
		description: "Lorem ipsum is placeholder text",
		locationTime: "DBH 6011, 1-2 PM PST",
	},
	{
		eventName: "Event Name # 2",
		description: "Lorem ipsum is placeholder text",
		locationTime: "DBH 6011, 1-2 PM PST",
	},
];

const SATURDAYEVENTS: Event[] = [
	{
		eventName: "Event Name",
		description: "Lorem ipsum is placeholder text",
		locationTime: "DBH 6011, 1-2 PM PST",
	},
	{
		eventName: "Event Name 2",
		description: "Lorem ipsum is placeholder text",
		locationTime: "DBH 6011, 1-2 PM PST",
	},
];

const SUNDAYEVENTS: Event[] = [
	{
		eventName: "Event Name",
		description: "Lorem ipsum is placeholder text",
		locationTime: "DBH 6011, 1-2 PM PST",
	},
];

function ClipboardSchedule() {
	return (
		<Container as="section" className={styles.clipboard}>
			<h2 className={styles.timer}>Schedule WIP</h2>
			<h5 className={styles.timerText}>Until Devpost Submissions Close</h5>
			<div className={styles.container}>
				<div className={styles.faq}>
					<h3 className={styles.day}>Friday</h3>
					<ClipboardAccordion faq={FRIDAYEVENTS}></ClipboardAccordion>
					<h3 className={styles.day}>Saturday</h3>
					<ClipboardAccordion faq={SATURDAYEVENTS}></ClipboardAccordion>
					<h3 className={styles.day}>Sunday</h3>
					<ClipboardAccordion faq={SUNDAYEVENTS}></ClipboardAccordion>
				</div>
			</div>
		</Container>
	);
}

export default ClipboardSchedule;
export type { Event };

import ClipboardSchedule from "./sections/ClipboardSchedule/ClipboardSchedule";
import { getSchedule } from "./getSchedule";

import { PortableText } from "@portabletext/react";

import styles from "./Schedule.module.scss";

export default async function Schedule() {
	const events = await getSchedule();
	const schedule = events.map(
		({ host, startTime, title, endTime, category, description, location }) => ({
			host: host,
			title: title,
			startTime: startTime,
			endTime: endTime,
			category: <strong>{category}</strong>,
			description: <PortableText value={description} />,
			location: <strong>{location}</strong>,
		}),
	);

	return (
		<div className={styles.schedule}>
			<h1>Schedule</h1>
			<ClipboardSchedule schedule={schedule} />
		</div>
	);
}

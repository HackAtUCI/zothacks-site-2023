import { PortableText } from "@portabletext/react";
import ClipboardSchedule from "./ClipboardSchedule";
import { getSchedule } from "./getSchedule";

export const revalidate = 60;

import styles from "./page.module.scss";

export default async function Schedule() {
	const days = await getSchedule();

	const schedule = days.map((events) =>
		events.map(({ description, ...event }) => ({
			...event,
			description: <PortableText value={description} />,
		})),
	);

	return (
		<div className={styles.schedule}>
			<h1>Schedule</h1>
			<ClipboardSchedule schedule={schedule} />
		</div>
	);
}

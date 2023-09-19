"use client";
import ClipboardSchedule from "./sections/ClipboardSchedule/ClipboardSchedule";
import styles from "./Schedule.module.scss";

export default function Schedule() {
	return (
		<div className={styles.schedule}>
			<ClipboardSchedule />
		</div>
	);
}

import ClipboardSchedule from "./sections/ClipboardSchedule/ClipboardSchedule";

import styles from "./Schedule.module.scss";

export default function Schedule() {
	return (
		<div className={styles.schedule}>
			<h1>Schedule</h1>
			<ClipboardSchedule
				schedule={[
					{
						_key: "test",
						title: "test",
						description: "test",
						location: "test",
						startDate: new Date(),
						endDate: new Date(),
					},
				]}
			/>
		</div>
	);
}

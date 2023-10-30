import Image from "next/image";
import maintenancePetr from "@/assets/images/UnderMaintenenceLight.png";
import ClipboardSchedule from "./sections/ClipboardSchedule/ClipboardSchedule";
import styles from "./Schedule.module.scss";

export default function Schedule() {
	return (
		<div className={styles.schedule}>
			{/*
		<div className="container" style={{ width: "100vw", height: "80vh" }}>
			<div
				className={styles.maintenanceContainer}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<img
					src={maintenancePetr.src}
					alt="Anteaters working at a construction site."
					style={{ width: "100%" }}
				/>
				<div className="text-center">
					<h2>Page Under Maintenance</h2>
					<p>Check back soon!</p>
				</div>
			</div>
			*/}
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

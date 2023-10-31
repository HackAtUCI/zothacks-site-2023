import Image from "next/image";
import maintenancePetr from "@/assets/images/UnderMaintenenceLight.png";

import styles from "./Maintenance.module.scss";

function Maintenance() {
	return (
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
		</div>
	);
}

export default Maintenance;

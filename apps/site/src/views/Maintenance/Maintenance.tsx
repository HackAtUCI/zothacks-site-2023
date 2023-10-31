import Image from "next/image";
import maintenancePetr from "@/assets/images/UnderMaintenenceLight.png";

import styles from "./Maintenance.module.scss";

function Maintenance() {
	return (
		<section className={"container " + styles.maintenanceContainer}>
			<div className={styles.imageContainer}>
				<Image
					src={maintenancePetr.src}
					alt="Anteaters working at a construction site."
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>
			<h1 className="fs-2">Page Under Maintenance</h1>
			<p>Check back soon!</p>
		</section>
	);
}

export default Maintenance;

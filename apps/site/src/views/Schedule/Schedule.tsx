import maintenanceImage from "@/assets/images/maintenance.png";
import comingSoonImage from "@/assets/images/coming_soon.jpg";
import "./Schedule.module.scss";

export default function Schedule() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<img
				src={maintenanceImage.src}
				style={{
					width: "100vw",
					height: `100vw`,
					mixBlendMode: "multiply",
				}}
			></img>
		</div>
	);
}

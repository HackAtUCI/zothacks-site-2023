import maintenanceImage from "@/assets/images/maintenance.png";
import comingSoonImage from "@/assets/images/coming_soon.jpg";
import "./Schedule.module.scss";

export default function Schedule() {
	return (
		<div
			style={{
				width: "100vw",
				height: `${maintenanceImage.height}px`,
				backgroundImage: `url(${maintenanceImage.src})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "center",
				mixBlendMode: "multiply",
			}}
		></div>
	);
}

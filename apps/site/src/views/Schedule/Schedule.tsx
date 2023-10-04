import maintenancePetr from "@/assets/images/UnderMaintenenceLight.png";
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
				src={maintenancePetr.src}
				style={{
					width: "80vw",
					height: "60vw",
					mixBlendMode: "multiply",
				}}
			></img>
		</div>
	);
}

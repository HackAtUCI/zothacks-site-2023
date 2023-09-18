import ApplyButton from "@/views/Home/components/ApplyButton/ApplyButton";
import Sticker from "@/components/Sticker/Sticker";
import HackLogo from "@/assets/icons/hack.png";
import styles from "./Landing.module.scss";

function Landing() {
	return (
		<div className={styles.landing}>
			<h1>ZotHacks 2023</h1>
			<div style={{ marginTop: 100, position: "relative" }}>
				<Sticker imageSrc={HackLogo.src} alt="test" draggable />
			</div>
			<ApplyButton />
		</div>
	);
}

export default Landing;

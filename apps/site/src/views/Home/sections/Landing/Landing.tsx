import ApplyButton from "@/views/Home/components/ApplyButton/ApplyButton";
import styles from "./Landing.module.scss";

function Landing() {
	return (
		<div className={styles.landing}>
			<h1>ZotHacks 2023</h1>
			<ApplyButton />
		</div>
	);
}

export default Landing;

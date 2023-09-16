import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		// TODO Change to application site link
		<a href="https://hack.ics.uci.edu/">
			<button className={styles.applyButton}>
				<span className={styles.applyButtonText + " h1"}>Apply!</span>
			</button>
		</a>
	);
}

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		// TODO Change to application site link
		<a href="https://hack.ics.uci.edu/">
			<button className={styles.applyButton}>
				<h1 className={styles.applyButtonText}>Apply!</h1>
			</button>
		</a>
	);
}

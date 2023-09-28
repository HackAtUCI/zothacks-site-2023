import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<a
			className={styles.applyButton}
			href="https://hack.ics.uci.edu/" // TODO: Change to application site link
		>
			<div>Apply</div>
		</a>
	);
}

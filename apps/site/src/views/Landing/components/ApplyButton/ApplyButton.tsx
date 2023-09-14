import Button from "react-bootstrap/Button";
import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<div className={styles.applyButtonContainer}>
			<Button
				className={styles.applyButton}
				href="https://hack.ics.uci.edu/" // TODO Change to application site link
			>
				<h1 className={styles.applyButtonText}>Apply!</h1>
			</Button>
		</div>
	);
}

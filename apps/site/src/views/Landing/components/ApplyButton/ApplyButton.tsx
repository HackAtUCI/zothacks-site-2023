import styles from "./ApplyButton.module.scss";

import Button from "react-bootstrap/Button";

export default function ApplyButton() {
	return (
		<div className={styles.applyButtonContainer}>
			<Button
				className={styles.applyButton}
				href="https://hack.ics.uci.edu/" // TODO Change to application site link
			>
				<h2 className={styles.applyButtonText}>Apply!</h2>
			</Button>
		</div>
	);
}

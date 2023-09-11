import Button from "react-bootstrap/Button";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<Button
			className={styles.applyButton}
			href="https://hack.ics.uci.edu/" // TODO: Change to application site link
			variant=""
		>
			<div>Apply</div>
		</Button>
	);
}

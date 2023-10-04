import Button from "react-bootstrap/Button";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<Button
			className={styles.applyButton}
			href="/apply"
			variant=""
			target="_blank"
		>
			<div>Apply</div>
		</Button>
	);
}

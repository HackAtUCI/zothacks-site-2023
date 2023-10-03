import Button from "react-bootstrap/Button";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<Button
			className={styles.applyButton}
			href="https://forms.gle/nxRU44y9Gd5mrmXUA"
			variant=""
		>
			<div>Apply</div>
		</Button>
	);
}

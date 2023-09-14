import Container from "react-bootstrap/Container";
import styles from "./FAQ.module.scss";

export default function FAQs() {
	return (
		<Container as="section">
			<div className={styles.faqs}>
				<div className={styles.vertical_line} />
				<h1 className={styles.title}>FAQ</h1>
			</div>
		</Container>
	);
}

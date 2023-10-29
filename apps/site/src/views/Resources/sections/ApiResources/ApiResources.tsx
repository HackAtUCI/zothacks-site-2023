import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./ApiResources.module.scss";

import ApiResourcesList from "./config";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

function ApiResources() {
	return (
		<Container>
			{/* Card Component */}
			<div className={styles.card}>
				<h2 className={styles.title}>API Resources</h2>
				<p className={styles.text}>
					Application Programming Interface (API) are interfaces or
					communication protocol that simplifies implementation and maintenance
					of software. In order to access most API&apos;s, many languages use
					HTTP protocol to communicate with the servers that host the API and
					retrieve data.
				</p>
			</div>
			<Row className={styles["bottom-spacer"]}>
				{/* Sticky Notes */}
				{ApiResourcesList.map((resource) => (
					<Col className={styles.column} key={resource.stickyNoteColor}>
						<ResourceCard
							title={resource.title}
							description={resource.description}
							stickerSrc={resource.stickerSrc}
							links={[{ text: "API Reference", link: resource.tagLink }]}
							stickyNoteColor={resource.stickyNoteColor}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default ApiResources;

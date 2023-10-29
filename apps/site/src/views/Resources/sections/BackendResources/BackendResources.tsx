import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./BackendResources.module.scss";
import {
	BackendGroup,
	BackendGroupProps,
} from "../../components/BackendGroup/BackendGroup";
import BackendResourcesList from "./config";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

function BackendResources() {
	return (
		<Container>
			{/* Card Component */}
			<div className={styles.card}>
				<h2 className={styles.title}>Backend Framework Resources</h2>
				<p className={styles.text}>
					Backend Frameworks are a variety of middleware services used to
					connect to other API and database vendors to fit your project&apos;s
					needs.
				</p>
			</div>
			<Row className={styles["bottom-spacer"]}>
				{/* Sticky Notes */}
				{BackendResourcesList.map((resource) => (
					<Col className={styles.column} key={resource.stickyNoteColor}>
						<ResourceCard
							title={resource.title}
							description={resource.description}
							stickyNoteColor={resource.stickyNoteColor}
							links={resource.tags}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default BackendResources;

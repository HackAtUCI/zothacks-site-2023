import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./BackendResources.module.scss";
import {
	BackendGroup,
	BackendGroupProps,
} from "../../components/BackendGroup/BackendGroup";
import BackendResourcesList from "./config";

function BackendResources() {
	return (
		<Container>
			<Row className={styles.row}>
				{/* Card Component */}
				<Col className={styles.column}>
					<div className={styles.card}>
						<h2 className={styles.title}>Backend Framework Resources</h2>
						<p className={styles.text}>
							Backend Frameworks are a variety of middleware services used to
							connect to other API and database vendors to fit your
							project&apos;s needs.
						</p>
					</div>
				</Col>
				{/* Sticky Notes */}
				{BackendResourcesList.map((resource: BackendGroupProps) => (
					<Col className={styles.column} key={resource.stickyNoteColor}>
						<BackendGroup
							stickyNoteColor={resource.stickyNoteColor}
							title={resource.title}
							description={resource.description}
							tapeOrientation={resource.tapeOrientation}
							tags={resource.tags}
							className={resource?.className}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default BackendResources;

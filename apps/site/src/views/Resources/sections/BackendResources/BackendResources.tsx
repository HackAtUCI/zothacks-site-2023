import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./BackendResources.module.scss";
import { Backend_Group_Props } from "@/views/Resources/interfaces/interfaces";
import Backend_Group from "../../components/BackendGroup/BackendGroup";
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
							connect to other API and database vendors to fit your project's
							needs.
						</p>
					</div>
				</Col>
				{/* Post-Its */}
				{BackendResourcesList.map((resource: Backend_Group_Props) => (
					<Col className={styles.column} key={resource.card}>
						<Backend_Group
							card={resource.card}
							title={resource.title}
							description={resource.description}
							tapeOrientation={resource.tapeOrientation}
							tagList={resource.tagList}
							className={resource?.className}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default BackendResources;

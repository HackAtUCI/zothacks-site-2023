import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./ApiResources.module.scss";

import API_group from "../../components/ApiGroup/ApiGroup";
import ApiResourcesList from "./config";

import { API_Group_Props } from "../../interfaces/interfaces";

function ApiResources() {
	return (
		<Container>
			<Row className={styles.row}>
				{/* Card Component */}
				<Col className={styles.column}>
					<div className={styles.card}>
						<h2 className={styles.title}>API Resources</h2>
						<p className={styles.text}>
							Application Programming Interface (API) are interfaces or
							communication protocol that simplifies implementation and
							maintenance of software. In order to access most API&apos;s, many
							languages use HTTP protocol to communicate with the servers that
							host the API and retrieve data.
						</p>
					</div>
				</Col>
				{/* Post Its */}
				{ApiResourcesList.map((resource: API_Group_Props) => (
					<Col className={styles.column} key={resource.postItSrc}>
						<API_group
							title={resource.title}
							description={resource.description}
							stickerSrc={resource.stickerSrc}
							tagSrc={resource.tagSrc}
							tagLink={resource.tagLink}
							postItSrc={resource.postItSrc}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default ApiResources;

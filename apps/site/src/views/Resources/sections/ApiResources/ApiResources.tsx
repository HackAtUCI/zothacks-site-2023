import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./ApiResources.module.scss";

import google_cloud_sticker from "@/assets/icons/google-cloud-logo.png";
import google_cloud_post_it from "@/assets/post_its/google-post-it.png";
import twitter_sticker from "@/assets/icons/twitter-logo.png";
import twitter_post_it from "@/assets/post_its/twitter-post-it.png";
import spotify_sticker from "@/assets/icons/spotify-logo.png";
import spotify_post_it from "@/assets/post_its/spotify-post-it.png";
import api_tag from "@/assets/images/api-reference-tag.png";
import API_group from "../../components/API_group/API_group";

function ApiResources() {
	return (
		<Container>
			{/* Card Component */}
			<Row className={styles.row}>
				<div className={styles.card}>
					<h2 className={styles.title}>API Resources</h2>
					<p className={styles.text}>
						Application Programming Interface (API) are interfaces or
						communication protocol that simplifies implementation and
						maintenance of software. In order to access most API's, many
						languages use HTTP protocol to communicate with the servers that
						host the API and retrieve data.
					</p>
				</div>
				<Col className={styles.column}>
					<API_group
						title="Google Cloud API"
						description="API that allows users to access Google services such as storage access
				and machine-learning"
						sticker_src={google_cloud_sticker.src}
						tag_src={api_tag.src}
						tag_link="https://hack.ics.uci.edu/"
						post_it_src={google_cloud_post_it.src}
					/>
				</Col>
				<Col className={styles.column}>
					<API_group
						title="Twitter API"
						description="API that retrieves data on tweets and trends"
						sticker_src={twitter_sticker.src}
						tag_src={api_tag.src}
						tag_link="https://hack.ics.uci.edu/"
						post_it_src={twitter_post_it.src}
					/>
				</Col>
				<Col className={styles.column}>
					<API_group
						title="Spotify API"
						description="API that retrieves data on Spotify music, playlists, artists, and users"
						sticker_src={spotify_sticker.src}
						tag_src={api_tag.src}
						tag_link="https://hack.ics.uci.edu/"
						post_it_src={spotify_post_it.src}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default ApiResources;

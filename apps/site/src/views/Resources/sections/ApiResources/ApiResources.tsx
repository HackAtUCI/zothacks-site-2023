import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import styles from "./ApiResources.module.scss";

import { ApiGroup } from "../../components/ApiGroup/ApiGroup";
import { getResources } from "../../getResources";
import { client } from "@/lib/sanity/client";

async function ApiResources() {
	const resources = await getResources("api");
	return (
		<div className="container">
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
			<div className={styles["bottom-spacer"] + " row"}>
				{/* Sticky Notes */}
				{resources.map(
					({ _id, title, description, link, logo, stickyNoteColor }) => (
						<div className={styles.column + " col"} key={_id}>
							<ApiGroup
								title={title}
								description={<PortableText value={description} />}
								stickerSrc={imageUrlBuilder(client).image(logo).url()}
								tagLink={link}
								stickyNoteColor={stickyNoteColor.hex}
							/>
						</div>
					),
				)}
			</div>
		</div>
	);
}

export default ApiResources;

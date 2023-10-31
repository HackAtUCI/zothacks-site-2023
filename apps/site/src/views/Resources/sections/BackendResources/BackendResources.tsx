import styles from "./BackendResources.module.scss";

import { BackendGroup } from "../../components/BackendGroup/BackendGroup";
import { getResources } from "../../getResources";
import { PortableText } from "@portabletext/react";

async function BackendResources() {
	const resources = await getResources("backend");
	return (
		<div className="container">
			{/* Card Component */}
			<div className={styles.card}>
				<h2 className={styles.title}>Backend Framework Resources</h2>
				<p className={styles.text}>
					Backend Frameworks are a variety of middleware services used to
					connect to other API and database vendors to fit your project&apos;s
					needs.
				</p>
			</div>
			<div className={styles["bottom-spacer"] + " row"}>
				{/* Sticky Notes */}
				{resources.map(
					({ _id, title, description, link, logo, stickyNoteColor }) => (
						<div className={styles.column + " div"} key={_id}>
							<BackendGroup
								stickyNoteColor={stickyNoteColor.hex}
								title={title}
								description={<PortableText value={description} />}
								tags={[]}
								tapeOrientation="left"
							/>
						</div>
					),
				)}
			</div>
		</div>
	);
}

export default BackendResources;

"use client";

import styles from "./Resources.module.scss";
import Landing from "./sections/Landing/Landing";
import ApiResources from "./sections/ApiResources/ApiResources";
import BackendResources from "./sections/BackendResources/BackendResources";
export default function Resources() {
	return (
		<div className={styles.resources}>
			<Landing />
			<ApiResources />
			<BackendResources />
		</div>
	);
}

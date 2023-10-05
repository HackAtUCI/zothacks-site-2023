"use client";

import ApplyButton from "@/views/Home/components/ApplyButton/ApplyButton";
import styles from "./Landing.module.scss";

function Landing() {
	return (
		<div className={styles.landing}>
			<h1>ZotHacks 2023</h1>
			<p>November 4-5, 2023</p>
			<ApplyButton />
		</div>
	);
}

export default Landing;

"use client";

import ApplyButton from "@/views/Home/components/ApplyButton/ApplyButton";
import Title from "@/views/Home/components/Title/Title";
import styles from "./Landing.module.scss";

function Landing() {
	return (
		<div className={styles.landing}>
			<Title />
			<p className="fs-2">November 4&ndash;5</p>
			<ApplyButton />
		</div>
	);
}

export default Landing;

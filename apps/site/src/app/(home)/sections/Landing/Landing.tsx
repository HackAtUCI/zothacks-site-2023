"use client";
import ApplyButton from "./ApplyButton";
import Title from "@/app/(home)/sections/Landing/Title";
import styles from "./Landing.module.scss";

const Landing = () => {
	return (
		<div className={styles.landing}>
			<Title />
			<h1 className="visually-hidden">ZotHacks 2023</h1>
			<p className="fs-2">November 4&ndash;5</p>
			<ApplyButton />
		</div>
	);
};

export default Landing;

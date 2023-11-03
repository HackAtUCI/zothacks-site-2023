"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import styles from "./Countdown.module.scss";

// 10/4/23 10AM in UTC
const hackingStarts = new Date(Date.UTC(2023, 10, 4, 17, 0, 0));

const Countdown = () => {
	const [remainingSeconds, setRemainingSeconds] = useState<number>(NaN);

	useEffect(() => {
		setRemainingSeconds(
			(hackingStarts.valueOf() - new Date().valueOf()) / 1000,
		);
		const interval = setInterval(() => {
			setRemainingSeconds((r) => r - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={clsx(
				styles.countdown,
				!isNaN(remainingSeconds) && styles.loaded,
			)}
		>
			<span className={styles.time}>
				<span className={styles.number}>
					{Math.floor(remainingSeconds / (60 * 60))}
				</span>
				<span className={styles.colon}>:</span>
				<span className={styles.number}>
					{Math.floor((remainingSeconds / 60) % 60)
						.toString()
						.padStart(2, "0")}
				</span>

				<span className={styles.colon}>:</span>
				<span className={styles.number}>
					{Math.floor(remainingSeconds % 60)
						.toString()
						.padStart(2, "0")}
				</span>
			</span>
			<span className={styles.caption}>Until Hacking Begins</span>
		</div>
	);
};

export default Countdown;

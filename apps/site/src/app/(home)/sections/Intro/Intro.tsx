"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";

import { motion, cubicBezier } from "framer-motion";
import pin from "@/assets/images/index-card-pin.svg";
import hackDoodle from "@/assets/images/hack-doodle.png";

import styles from "./Intro.module.scss";

const Intro = () => {
	return (
		<Container as="section">
			<div className={styles.intro}>
				<motion.img
					initial={{
						opacity: 0,
						y: -10,
						x: -10,
					}}
					viewport={{ once: true }}
					whileInView={{
						opacity: 1,
						y: 0,
						x: 0,
						transition: {
							duration: 0.65,
							ease: cubicBezier(0.64, 0, 0.78, 0),
						},
					}}
					className={styles.pin}
					src={pin.src}
					width="100"
					height="100"
					alt="Index card pin"
				/>
				<h2>What is ZotHacks?</h2>
				<p>
					ZotHacks is a beginner-friendly hackathon where students with minimal
					computer science experience will learn to build their first CS
					project. Through ZotHacks, we introduce these students to the world of
					hackathons and web development by providing technical workshops,
					strong mentorship, and free food!
				</p>
				<Image
					className={styles.hackDoodle}
					src={hackDoodle}
					width="250"
					height="250"
					alt="Hack logo doodle"
				/>
			</div>
		</Container>
	);
};

export default Intro;

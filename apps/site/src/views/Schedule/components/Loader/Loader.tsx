import { Variants, motion } from "framer-motion";
import styles from "./Loader.module.scss";

const variants: Variants = {
	initial: {
		scaleY: 0.5,
		opacity: 0,
	},
	animate: {
		scaleY: 1,
		opacity: 1,
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 0.5,
			ease: "circIn",
		},
	},
};

const BarLoader = () => {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.125,
			}}
			initial="initial"
			animate="animate"
			className={styles.container}
		>
			<motion.div variants={variants} className={styles.loadingBlock} />
			<motion.div variants={variants} className={styles.loadingBlock} />
			<motion.div variants={variants} className={styles.loadingBlock} />
			<motion.div variants={variants} className={styles.loadingBlock} />
			<motion.div variants={variants} className={styles.loadingBlock} />
		</motion.div>
	);
};

export default BarLoader;

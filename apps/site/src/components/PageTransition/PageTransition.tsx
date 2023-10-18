"use client";
import styles from "./PageTransition.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useRef, useContext } from "react";

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";

// Reference: https://github.com/vercel/next.js/issues/49279#:~:text=I%20just%20managed%20to%20piece%20it%20together.%20Here%27s%20how%20I%20implemented%20the%20solution%3A
// keeps page frozen and prevents page cache from loading too fast, while page transitions
// SSR messes with the key prop, which triggers the layout animation from Framer's AnimatePresence
function FrozenRouter(props: PropsWithChildren<{}>) {
	const context = useContext(LayoutRouterContext);
	const frozen = useRef(context).current;

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{props.children}
		</LayoutRouterContext.Provider>
	);
}

export default function PageTransition() {
	// const router = useRouter();
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div key={pathname}>
				<motion.div
					className={styles.slideIn}
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 1 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				/>
				<motion.div
					className={styles.slideOut}
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 0 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				/>
			</motion.div>
		</AnimatePresence>
	);
}

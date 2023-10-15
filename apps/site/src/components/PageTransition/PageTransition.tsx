"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useRef, useContext } from "react";

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";

// Reference: https://github.com/vercel/next.js/issues/49279#:~:text=I%20just%20managed%20to%20piece%20it%20together.%20Here%27s%20how%20I%20implemented%20the%20solution%3A
function FrozenRouter(props: PropsWithChildren<{}>) {
	const context = useContext(LayoutRouterContext);
	const frozen = useRef(context).current;

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{props.children}
		</LayoutRouterContext.Provider>
	);
}

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	// const router = useRouter();
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.75,
				}}
				variants={{
					initialState: {
						opacity: 0,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					},
					animateState: {
						opacity: 1,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					},
					exitState: {
						clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
					},
				}}
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
}

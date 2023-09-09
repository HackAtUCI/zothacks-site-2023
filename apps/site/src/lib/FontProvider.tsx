"use client";

import { Fuzzy_Bubbles } from "next/font/google";

const fuzzy = Fuzzy_Bubbles({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function FontProvider() {
	return (
		<style jsx global>
			{`
				:root {
					--next-font-fuzzy-bubbles: ${fuzzy.style.fontFamily};
				}
			`}
		</style>
	);
}

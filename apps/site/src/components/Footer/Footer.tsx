"use client";

import Image from "next/image";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/email.svg";
import Facebook from "@/assets/icons/Facebook-Logo-Primary-min.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Hack from "@/assets/icons/hack-logo.svg";

type Social = {
	icon: any;
	link: string;
	alt: string;
};

const SOCIALS: Social[] = [
	{
		icon: Hack,
		link: "https://hack.ics.uci.edu/",
		alt: "Hack at UCI",
	},
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail",
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram",
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className="text-center">
				{SOCIALS.map(({ icon, link, alt }) => (
					<a key={link} href={link} target="_blank">
						<Image
							src={icon.src}
							alt={alt}
							width={45}
							height={45}
							className={styles.socials}
						/>
					</a>
				))}
			</div>
		</footer>
	);
}

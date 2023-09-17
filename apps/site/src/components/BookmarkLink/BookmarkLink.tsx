import React from "react";
import Button from "react-bootstrap/Button";

import styles from "./BookmarkLink.module.scss";

interface BookmarkLinkProps {
	className?: string;
	href: string;
	children: React.ReactNode;
}

export default function BookmarkLink({
	className,
	href,
	children,
}: BookmarkLinkProps) {
	return (
		<Button
			className={styles.bookmarkLink + " " + className}
			variant="link"
			href={href}
		>
			{children}
		</Button>
	);
}

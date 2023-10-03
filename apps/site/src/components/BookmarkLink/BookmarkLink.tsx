import { PropsWithChildren } from "react";
import Button from "react-bootstrap/Button";

import styles from "./BookmarkLink.module.scss";

interface BookmarkLinkProps {
	className?: string;
	href: string;
	target: string;
}

export default function BookmarkLink({
	className,
	href,
	target,
	children,
}: PropsWithChildren<BookmarkLinkProps>) {
	return (
		<Button
			className={styles.bookmarkLink + " " + className}
			variant=""
			href={href}
			target={target}
		>
			{children}
		</Button>
	);
}

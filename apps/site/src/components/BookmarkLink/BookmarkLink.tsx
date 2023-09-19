import { PropsWithChildren } from "react";
import Button from "react-bootstrap/Button";

import styles from "./BookmarkLink.module.scss";

interface BookmarkLinkProps {
	className?: string;
	href: string;
}

export default function BookmarkLink({
	className,
	href,
	children,
}: PropsWithChildren<BookmarkLinkProps>) {
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

import { redirect } from "next/navigation";

export default function ApplyRedirectRoute() {
	redirect(
		`https://docs.google.com/forms/d/e/1FAIpQLSethOFfe_PSRl587ZKPrhQEOIi_nz2s1B8wDJAzQj0r3UebnQ/viewform`,
	);
}

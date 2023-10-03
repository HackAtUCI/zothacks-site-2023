import { redirect } from "next/navigation";

export default function MentorRedirectRoute() {
	redirect(
		"https://docs.google.com/forms/d/e/1FAIpQLSexqsA7DXk9_c2N3s1FjJHMJLNiYsc1LlSo3-7bYNlOpWFYLg/viewform",
	);
}

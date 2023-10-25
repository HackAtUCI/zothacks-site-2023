"use client";

import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CountdownItem from "../CountdownItem/CountdownItem";

const COUNTDOWN_FROM = "11/4/2023 10:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Countdown() {
	const intervalRef = useRef<NodeJS.Timer | null>(null);

	const [remaining, setRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		intervalRef.current = setInterval(handleCountdown, 1000);

		return () => clearInterval(intervalRef.current || undefined);
	}, []);

	const handleCountdown = () => {
		const end = new Date(COUNTDOWN_FROM);

		const now = new Date();

		const distance = +end - +now;

		const days = Math.floor(distance / DAY);
		const hours = Math.floor((distance % DAY) / HOUR);
		const minutes = Math.floor((distance % HOUR) / MINUTE);
		const seconds = Math.floor((distance % MINUTE) / SECOND);

		setRemaining({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	return (
		<Container className="p-5">
			<Row className="justify-content-center text-center">
				<Col md={2}>
					<CountdownItem num={remaining.days} text="days" />
				</Col>
				<Col md={2}>
					<CountdownItem num={remaining.hours} text="hours" />
				</Col>
				<Col md={2}>
					<CountdownItem num={remaining.minutes} text="minutes" />
				</Col>
				<Col md={2}>
					<CountdownItem num={remaining.seconds} text="seconds" />
				</Col>
			</Row>
		</Container>
	);
}

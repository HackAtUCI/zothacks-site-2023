"use client";

import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CountdownItem from "../CountdownItem/CountdownItem";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const computeTimeTil = () => {
	const end = new Date(2023, 10, 4, 10, 0, 0);

	const now = new Date();

	const distance = +end - +now;

	const days = Math.floor(distance / DAY);
	const hours = Math.floor((distance % DAY) / HOUR);
	const minutes = Math.floor((distance % HOUR) / MINUTE);
	const seconds = Math.floor((distance % MINUTE) / SECOND);
	return {
		days,
		hours,
		minutes,
		seconds,
	};
};

export default function Countdown() {
	const initTime = computeTimeTil();
	const [remaining, setRemaining] = useState({ ...initTime });

	useEffect(() => {
		const timer = setInterval(handleCountdown, 1000);

		return () => clearInterval(timer);
	}, []);

	const handleCountdown = () => {
		const time = computeTimeTil();

		setRemaining({ ...time });
	};

	return (
		<Container className="pb-5">
			<Row className="justify-content-center text-center mb-5">
				{remaining.days !== 0 ? (
					<Col>
						<CountdownItem num={remaining.days} text="days" />
					</Col>
				) : null}
				<Col>
					<CountdownItem num={remaining.hours} text="hours" />
				</Col>
				<Col md={2}>
					<CountdownItem num={remaining.minutes} text="minutes" />
				</Col>
				<Col md={2}>
					<CountdownItem num={remaining.seconds} text="seconds" />
				</Col>
			</Row>
			<h2>Until Hacking Begins</h2>
		</Container>
	);
}

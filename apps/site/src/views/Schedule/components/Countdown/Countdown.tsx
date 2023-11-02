"use client";

import { useEffect, useState, useRef, MutableRefObject } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CountdownItem from "../CountdownItem/CountdownItem";
import Loader from "../Loader/Loader";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface Time {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

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
	const timer: MutableRefObject<NodeJS.Timer | undefined> = useRef();
	const [remaining, setRemaining] = useState<Time | null>(null);

	useEffect(() => {
		timer.current = setInterval(handleCountdown, 1000);
		return () => clearInterval(timer.current || undefined);
	}, []);

	const handleCountdown = () => {
		const time: Time = computeTimeTil();

		setRemaining(time);
	};

	return (
		<Container style={{ marginTop: "60px" }}>
			{remaining !== null ? (
				<>
					<Row className="justify-content-center text-center mb-5">
						{remaining.days !== 0 ? (
							<Col>
								<CountdownItem num={remaining.days} text="days" />
							</Col>
						) : null}
						<Col>
							<CountdownItem num={remaining.hours} text="hours" />
						</Col>
						<Col>
							<CountdownItem num={remaining.minutes} text="minutes" />
						</Col>
						<Col>
							<CountdownItem num={remaining.seconds} text="seconds" />
						</Col>
					</Row>
					<h2>Until Hacking Begins</h2>
				</>
			) : (
				<Row className="justify-content-center">
					<Loader />
				</Row>
			)}
		</Container>
	);
}

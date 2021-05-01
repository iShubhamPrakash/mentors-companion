import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>

			<Link to="/demo1">Demo1</Link>
			<br />
			<Link to="/demo2">Demo2</Link>
			<br />
			<Link to="/unknown">unknown</Link>
		</div>
	);
}

'use client'
import init, { greet } from "../../wasm/pkg/wasm";
import { useEffect, useState } from "react";

export default function Password() {

	const [ username,setText ] = useState("");

	useEffect(() => {
		init();
	}, []);

	return (
		<main>
			<h1>This is Password</h1>
			<br />
			<p>What your name</p>
			<input 
				type="text" 
				value={username}
				onChange={() => setText(event.target.value)}
			/>
			<button onClick={() => greet(username)}>greet</button>
		</main>
	);
}

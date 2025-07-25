'use client'
import { useEffect, useState } from "react";

function greet(username :string) {
	alert("Hello " + username + " !!"); 
}

export default function Password() {

	const [ username,setText ] = useState("");

	return (
		<main>
			<h1>This is Password</h1>
			<br />
			<p>What your name</p>
			<input 
				type="text" 
				value={username}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
			/>
			<button onClick={() => greet(username)}>greet</button>
		</main>
	);
}

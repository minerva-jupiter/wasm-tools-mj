import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<br />
			<ul>
				<li><Link href="/password">PasswordGenerator</Link></li>
			</ul>
		</>
	);
}

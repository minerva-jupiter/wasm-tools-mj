import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WASM webtools",
  description: "Generated by Minerva_Juppiter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
	  		<header>
				<h1>This is WASM tools by Minerva_Juppiter</h1>
				<br/>
				<h3>In case you find issue, please report me vir Github Issue.</h3>
				<br/>
				<a href="https://www.minervajuppiter.net/"><h4>About Me</h4></a>
			</header>
        	{children}
			<footer>
			<p>@all right reserved by minerva_juppiter</p>
			</footer>
      </body>
    </html>
  );
}

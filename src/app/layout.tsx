"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "../components";
import localFont from "next/font/local";
import Script from "next/script";

// export const metadata: Metadata = {
// 	title: "Quonto",
// 	description: "Quonto Landing Page Clone",
// };

const poly = localFont({
	src: "../fonts/PolySans-Slim.ttf",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${poly.className} antialiased`} lang="en">
			<body className="scroll-smooth">
				<AppHeader />
				<main
					id="smooth-wrapper"
					className="mt-[80px] overflow-x-hidden px-5 2xl:!w-[1500px] 2xl:m-auto"
				>
					{children}
				</main>
				<Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollSmoother.min.js" />
			</body>
		</html>
	);
}

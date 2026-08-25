import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Music Machine",
	description: "A live coding environment for learning assembly and computer architecture through music.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<body>
			{children}
		</body>
		</html>
	);
}

import Link from "next/link";
import Logout from "./logout";

export default function Navbar() {
	return (
		<header className="flex justify-between">
			<h2>Adminzz</h2>
			<nav className="flex gap-2">
				<Link href="/" className="">
					Home
				</Link>
				<Link href="/" className="">
					Analytics
				</Link>
				<Link href="/" className="">
					Profile
				</Link>
				<Link href="/" className="">
					Logout
				</Link>
			</nav>
			<Logout />
		</header>
	);
}

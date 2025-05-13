"use client";
export default function Logout() {
	const handleClick = (): void => {
		console.log("Logged out");
	};
	return (
		<button
			type="button"
			onClick={handleClick}
			className="text-white bg-blue-400 rounded-md px-4 py-1 text-base"
		>
			Logout
		</button>
	);
}

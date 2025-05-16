"use client";
export default function Logout() {
	const handleClick = (): void => {
		console.log("Logged out");
	};
	return (
		<button
			type="button"
			onClick={handleClick}
			className="text-white bg-blue-400 rounded-md px-3 py-2 text-base"
		>
			Logout
		</button>
	);
}

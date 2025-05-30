export default function Login() {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};
	return (
		// <div className="h-1/2">
		//     <form className="">
		//         <h3 className="bg-blue-400">Sign In</h3>
		//     </form>
		// </div>
		<div className="">
			<form className="h-1/2" onSubmit={handleSubmit}>
				<label htmlFor="email" className="">
					Email
				</label>
				<input
					type="email"
					id="email"
					value=""
					placeholder="Enter email..."
					onChange={handleChange}
					className=""
				/>
				<label htmlFor="password" className="">
					Password
				</label>
				<input
					type="password"
					id="password"
					value=""
					placeholder="Enter password..."
					onChange={handleChange}
					className=""
				/>
				<button
					type="submit"
					className="bg-blue-400 text-white rounded-lg"
				>
					Login
				</button>
			</form>
		</div>
	);
}

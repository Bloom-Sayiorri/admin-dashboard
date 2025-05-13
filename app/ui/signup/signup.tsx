"use client";
export default function Signup() {
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	return (
		<div className="">
			<form className="" onSubmit={handleSubmit}>
				<label htmlFor="username" className="">
					Username
				</label>
				<input
					type="text"
					id="username"
					value=""
					placeholder="Enter username..."
					onChange={handleChange}
					className=""
				/>
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
				<button type="submit" className="">
					Submit
				</button>
			</form>
		</div>
	);
}

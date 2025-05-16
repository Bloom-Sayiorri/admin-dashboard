import Navbar from "@/app/ui/dashboard/navbar/navbar";
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="">
				<div className="flex flex-row">
					<div className="flex-[1]">
						<Sidebar />
					</div>
					<div className="flex-[4]">
						<Navbar />
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}

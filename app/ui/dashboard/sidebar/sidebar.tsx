import {
	MdAnalytics,
	MdAttachMoney,
	MdDashboard,
	MdHelpCenter,
	MdOutlineSettings,
	MdPeople,
	MdShoppingBag,
	MdSupervisedUserCircle,
	MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
	{
		title: "Pages",
		list: [
			{
				title: "Pages",
				path: "/dahsboard",
				icon: <MdDashboard />,
			},
			{
				title: "Users",
				path: "/dahsboard/users",
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: "Products",
				path: "/dahsboard/products",
				icon: <MdShoppingBag />,
			},
			{
				title: "Trasncations",
				path: "/dahsboard/transactions",
				icon: <MdAttachMoney />,
			},
			{
				title: "Analytics",
				path: "/dahsboard/analytics",
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: "Analytics",
		list: [
			{
				title: "Revenue",
				path: "dashboard/revenue",
				icon: <MdWork />,
			},
			{
				title: "Reports",
				path: "dashboard/reports",
				icon: <MdAnalytics />,
			},
			{
				title: "Teams",
				path: "dashboard/teams",
				icon: <MdPeople />,
			},
		],
	},
	{
		title: "User",
		list: [
			{
				title: "Settings",
				path: "dashboard/settings",
				icon: <MdOutlineSettings />,
			},
			{
				title: "Help",
				path: "dashboard/help",
				icon: <MdHelpCenter />,
			},
		],
	},
];

const Sidebar = () => {
	return (
		<div className="">
			<div className="">
				<Image src="/" alt="" width={50} height={50} />
			</div>
			<ul className="">
				{menuItems.map((items, index) => {
					return (
						<li key={index}>
							<span className="text-xl font-bold">
								{items.title}
							</span>
							{items.list.map((item, index) => (
								<MenuLink key={index} item={item} />
							))}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;

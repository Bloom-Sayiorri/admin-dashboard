import Link from "next/link";

export default function MenuLink({
	item,
}: {
	item: {
		title: string;
		path: string;
		icon: JSX.Element; //React.ReactElement;
	};
}) {
	return (
		<Link href={item.path} className="">
			{item.icon}
			{item.title}
		</Link>
	);
}

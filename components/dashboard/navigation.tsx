"use client";

import {
	AcademicCapIcon,
	HomeIcon,
	InformationCircleIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: HomeIcon },
	{ name: "Students", href: "/dashboard/students", icon: UsersIcon },
	{ name: "Lessons", href: "/dashboard/lessons", icon: AcademicCapIcon },
	{ name: "Logs", href: "/dashboard/logs", icon: InformationCircleIcon },
];

export default function DashboardNavigation() {
	const pathname = usePathname();

	return (
		<>
			<ul role="list" className="-mx-2 space-y-1">
				{navigation.map((link) => (
					<li key={link.href}>
						<Link
							className={clsx(
								"group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white",
								{
									"text-white bg-gray-800": pathname === link.href,
								}
							)}
							href={link.href}
						>
							<link.icon aria-hidden="true" className="size-6 shrink-0" />{" "}
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

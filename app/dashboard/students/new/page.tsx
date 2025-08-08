import PageTitle from "@/components/common/page-title";
import NewStudentForm from "@/components/dashboard/forms/new-student-form";
import { Button } from "@/components/ui/button";
import { getClasses } from "@/lib/data";

import { Class } from "@/lib/types";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Add a new student",
};

export default async function DashboardStudentsNew() {
	const classes: Class[] = await getClasses();

	return (
		<>
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<PageTitle
						title={
							typeof metadata.title === "string" ? metadata.title : "Title"
						}
					/>
				</div>
				<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
					<Button
						asChild
						className="flex gap-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<Link href="/dashboard/students" replace>
							<ArrowUturnLeftIcon /> Back to students
						</Link>
					</Button>
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-8 sm:flex-row">
				<div className="p-6 rounded-lg shadow-md sm:w-full lg:w-2/3">
					<NewStudentForm classes={classes} />
				</div>
			</div>
		</>
	);
}

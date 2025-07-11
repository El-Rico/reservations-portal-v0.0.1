import PageTitle from "@/components/common/page-title";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Student } from "@prisma/client";
import { setDefaultOptions } from "date-fns";
import { nl } from "date-fns/locale";
import { Metadata } from "next";
import Link from "next/link";

setDefaultOptions({ locale: nl });

export const metadata: Metadata = {
	title: "Students",
};

export default async function DashboardStudents() {
	const students: Student[] = await prisma.student.findMany();

	return (
		<div className="px-4 sm:px-6 lg:px-0">
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
						className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<Link href="/dashboard/students/new">Add new student</Link>
					</Button>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
									>
										<a href="#" className="group inline-flex">
											Name
											<span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
												<ChevronDownIcon
													aria-hidden="true"
													className="size-5"
												/>
											</span>
										</a>
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										<a href="#" className="group inline-flex">
											Email address
											<span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
												<ChevronDownIcon
													aria-hidden="true"
													className="size-5"
												/>
											</span>
										</a>
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										<a href="#" className="group inline-flex">
											Occupation
											<span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
												<ChevronDownIcon
													aria-hidden="true"
													className="invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"
												/>
											</span>
										</a>
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										<a href="#" className="group inline-flex">
											Terms
											<span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
												<ChevronDownIcon
													aria-hidden="true"
													className="invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"
												/>
											</span>
										</a>
									</th>
									<th scope="col" className="relative py-3.5 pr-0 pl-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{students.map((student) => (
									<tr key={student.email}>
										<td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
											{`${student.last_name}, ${student.first_name}`}
										</td>
										<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
											{student.email}
										</td>
										<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
											{student.occupation === "FULL" ? (
												<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
													{student.occupation}
												</span>
											) : (
												<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
													{student.occupation}
												</span>
											)}
										</td>
										<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
											{student.acceptedTerms ? (
												<CheckIcon className="text-green-600 size-6" />
											) : (
												<XMarkIcon className="text-red-600 size-6" />
											)}
										</td>
										<td className="relative py-4 pl-3 text-right text-sm whitespace-nowrap sm:pr-0 lg:pr-4">
											<a
												href="#"
												className="text-indigo-600 hover:text-indigo-900"
											>
												Edit
												<span className="sr-only">
													, {student.first_name} {student.last_name}
												</span>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

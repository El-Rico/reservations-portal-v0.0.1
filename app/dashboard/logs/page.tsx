import PageTitle from "@/components/common/page-title";
import prisma from "@/lib/prisma";
import { format, setDefaultOptions } from "date-fns";
import { nl } from "date-fns/locale";
import { Metadata } from "next";

setDefaultOptions({ locale: nl });

export const metadata: Metadata = {
	title: "Logs",
};

export default async function DashboardLogs() {
	const logs = await prisma.log.findMany({
		orderBy: { createdAt: "desc" },
	});

	return (
		<>
			<div className="px-4 sm:px-6 lg:px-0">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<PageTitle
							title={
								typeof metadata.title === "string" ? metadata.title : "Title"
							}
						/>
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
											className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-[200px]"
										>
											<a href="#" className="group inline-flex">
												Date
											</a>
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											<a href="#" className="group inline-flex">
												Message
											</a>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{logs.map((log) => (
										<tr key={log.id}>
											<td className="py-4 pr-3 pl-4 text-sm font-bold whitespace-nowrap text-gray-900 sm:pl-0">
												{format(log.createdAt, "dd-MM-yyyy - HH:mm:ss")}
											</td>
											<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-900">
												{log.message}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

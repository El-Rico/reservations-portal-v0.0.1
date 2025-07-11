import PageTitle from "@/components/common/page-title";
import prisma from "@/lib/prisma";
import { Student } from "@prisma/client";
import { format, setDefaultOptions } from "date-fns";
import { nl } from "date-fns/locale";
import { Metadata } from "next";

setDefaultOptions({ locale: nl });

export const metadata: Metadata = {
	title: "Students",
};

export default async function DashboardStudents() {
	const students: Student[] = await prisma.student.findMany();

	return (
		<>
			<PageTitle
				title={typeof metadata.title === "string" ? metadata.title : "Title"}
			/>
			<ul>
				{students.map((student: Student) => (
					<li key={student.id}>
						{student.first_name} {student.last_name} - sinds{" "}
						{format(new Date(student.createdAt), "EEEE, d LLLL yyyy")}
					</li>
				))}
			</ul>
		</>
	);
}

import prisma from "@/lib/prisma";
import { Student } from "@prisma/client";
import { format, setDefaultOptions } from "date-fns";
import { nl } from "date-fns/locale";

setDefaultOptions({ locale: nl });

export default async function DashboardStudents() {
	const students: Student[] = await prisma.student.findMany();

	return (
		<>
			<h1>Students!</h1>
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

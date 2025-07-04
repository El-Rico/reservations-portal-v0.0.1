import prisma from "@/lib/prisma";
import { format, setDefaultOptions } from "date-fns";
import { nl } from "date-fns/locale";

setDefaultOptions({ locale: nl });

export default async function DashboardStudents() {
	const students = await prisma.student.findMany();

	return (
		<>
			<h1>Students!</h1>
			<ul>
				{students.map((student) => (
					<li key={student.id}>
						{student.first_name} {student.last_name} - sinds{" "}
						{format(new Date(student.createdAt), "EEEE, d LLLL yyyy")}
					</li>
				))}
			</ul>
		</>
	);
}

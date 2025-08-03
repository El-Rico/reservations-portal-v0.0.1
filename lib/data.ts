import z from "zod";
import prisma from "./prisma";
import { newStudentFormSchema } from "./validators";

export default async function addNewStudent(
	studentData: z.infer<typeof newStudentFormSchema>
) {
	const { lessons, classes, ...rest } = studentData;

	const response = await prisma.student.create({
		data: {
			...rest,
			lessons:
				lessons && lessons.length > 0
					? { connect: lessons.map((id) => ({ id: Number(id) })) }
					: undefined,
			classes: classes ? { connect: [{ id: Number(classes) }] } : undefined,
		},
	});
	console.log("New student added:", response);
	return response;
}

export async function getStudents() {
	const students = await prisma.student.findMany({
		include: {
			lessons: true,
			classes: true,
		},
	});
	return students;
}

export async function getClasses() {
	try {
		const classes = await prisma.class.findMany();
		return classes;
	} catch (error) {
		console.error("Error fetching classes:", error);
		throw new Error("Failed to fetch classes");
	}
}

import prisma from "./prisma";
import { type Student } from "./types";

export default async function addNewStudent(studentData: Student) {
	const response = await prisma.student.create({
		data: {
			...studentData,
		},
	});
	console.log("New student added:", response);
	return response;
}

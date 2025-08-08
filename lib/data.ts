"use server";

import z from "zod";
import prisma from "./prisma";
import { newStudentFormSchema } from "./validators";

export default async function addNewStudent(
	studentData: z.infer<typeof newStudentFormSchema>
) {
	try {
		const newStudent = await prisma.$transaction(async (tx) => {
			const { lessons, classes, ...data } = studentData;

			const student = await tx.student.create({
				data: {
					...data,
					lessons:
						lessons && lessons.length > 0
							? { connect: lessons.map((id) => ({ id: Number(id) })) }
							: undefined,
					classes: classes ? { connect: [{ id: Number(classes) }] } : undefined,
				},
			});

			await tx.log.create({
				data: {
					message: `New student: ${student.first_name} ${student.last_name} (ID: ${student.id} EMAIL: ${student.email}).`,
					students: {
						connect: {
							id: student.id,
						},
					},
				},
			});

			return student;
		});

		return newStudent;
	} catch (error) {
		console.error("Error creating student and log entry:", error);
		throw new Error("Failed to create student.");
	}
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

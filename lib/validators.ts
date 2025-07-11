"use client";

import { z } from "zod";

export const newStudentFormSchema = z.object({
	username: z.string().min(2, "Use a minimum of 2 characters.").max(50),
	email: z.email("Not a valid email address"),
	password: z.string().min(8, "Password must at least be 8 charachters long."),
	first_name: z.string().min(2, "Use a minimum of 2 characters."),
	last_name: z.string().min(2, "Use a minimum of 2 characters."),
	occupation: z.enum(["FULL", "EVEN", "ODD"]),
	credit: z.int(),
	acceptedTerms: z.boolean(),
	isStudent: z.boolean(),
	isAdmin: z.boolean(),
	lessons: z.array(z.string()).nullable(),
	classes: z.array(z.string()).nullable(),
});

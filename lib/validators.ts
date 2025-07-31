import { z } from "zod";

export const newStudentFormSchema = z.object({
	username: z.string().min(2, "Use a minimum of 2 characters.").max(50),
	email: z.email("Not a valid email address"),
	password: z.string().min(8, "Password must at least be 8 characters long."),
	first_name: z.string().min(2, "Use a minimum of 2 characters."),
	last_name: z.string().min(2, "Use a minimum of 2 characters."),
	occupation: z.enum(["FULL", "EVEN", "ODD"]),
	credit: z.coerce.number<string>().lte(3, "Credits must be 3 or less."),
	acceptedTerms: z.boolean(),
	isActive: z.boolean(),
	isStudent: z.boolean(),
	isAdmin: z.boolean(),
	classes: z.string().optional(),
	lessons: z.array(z.string()).optional(),
});

export const updateStudentFormSchema = newStudentFormSchema.extend({
	id: z.string().min(1, "ID is required"),
	modifiedAt: z.date().optional(),
});

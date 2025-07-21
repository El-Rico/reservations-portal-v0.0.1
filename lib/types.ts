import z from "zod";
import { newStudentFormSchema } from "./validators";

export type Student = z.infer<typeof newStudentFormSchema> & {
	id: string;
	lessons: string[];
	createdAt: Date;
	modifiedAt: Date;
};

import z from "zod";
import { newStudentFormSchema } from "./validators";

export type Student = z.infer<typeof newStudentFormSchema> & {
	id: string;
	createdAt: Date;
	modifiedAt: Date;
};

export type Class = {
	id: number;
	name: string;
	createdAt: Date;
	modifiedAt: Date;
};

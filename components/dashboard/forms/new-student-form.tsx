"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Class } from "@/lib/types";
import { newStudentFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function NewStudentForm({ classes }: { classes: Class[] }) {
	// 1. Define your form.
	const form = useForm({
		resolver: zodResolver(newStudentFormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			occupation: "FULL",
			credit: "0",
			acceptedTerms: false,
			isStudent: true,
			isAdmin: false,
			isActive: true,
			classes: "",
			lessons: undefined,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof newStudentFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
						<FormField
							{...form.register("username")}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("first_name")}
							name="first_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("last_name")}
							name="last_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
						<FormField
							{...form.register("email")}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email address</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("password")}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} type="password" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("credit")}
							name="credit"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Credits</FormLabel>
									<FormControl>
										<Input {...field} type="number" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							{...form.register("occupation")}
							name="occupation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Occupation</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select occupation" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{newStudentFormSchema.shape.occupation.options.map(
												(option: string) => (
													<SelectItem key={option} value={option}>
														{option}
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("classes")}
							name="classes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Class</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											Array.isArray(field.value)
												? field.value[0] ?? undefined
												: field.value ?? undefined
										}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select class" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{classes.map((classItem) => (
												<SelectItem
													key={classItem.id}
													value={String(classItem.id)}
												>
													{classItem.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							{...form.register("lessons")}
							name="lessons"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Lessons</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value ?? undefined}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select lesson" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="MA1">MA1</SelectItem>
											<SelectItem value="MA2">MA2</SelectItem>
											<SelectItem value="MA3">MA3</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
						<FormField
							{...form.register("acceptedTerms")}
							name="acceptedTerms"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
									<div className="space-y-0.5">
										<FormLabel>Accept terms</FormLabel>
										<FormDescription>
											This user has accepted the terms.
										</FormDescription>
									</div>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("isActive")}
							name="isActive"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
									<div className="space-y-0.5">
										<FormLabel>Active</FormLabel>
										<FormDescription>
											This user is able to login.
										</FormDescription>
									</div>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("isStudent")}
							name="isStudent"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
									<div className="space-y-0.5">
										<FormLabel>Student</FormLabel>
										<FormDescription>This user is a student.</FormDescription>
									</div>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							{...form.register("isAdmin")}
							name="isAdmin"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
									<div className="space-y-0.5">
										<FormLabel>Admin</FormLabel>
										<FormDescription>
											This user has admin permissions.
										</FormDescription>
									</div>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit">Add new student</Button>
				</form>
			</Form>
		</>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
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
import { newStudentFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function NewStudentForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof newStudentFormSchema>>({
		resolver: zodResolver(newStudentFormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			occupation: "FULL",
			credit: 0,
			acceptedTerms: false,
			isStudent: true,
			isAdmin: false,
			isActive: true,
			lessons: [],
			classes: [],
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
							control={form.control}
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
							control={form.control}
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
							control={form.control}
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
							control={form.control}
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
							control={form.control}
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
							control={form.control}
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
							control={form.control}
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
											<SelectItem value="FULL">Full</SelectItem>
											<SelectItem value="EVEN">Even</SelectItem>
											<SelectItem value="ODD">Odd</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4">
						<FormField
							control={form.control}
							name="acceptedTerms"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Accepted terms</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isActive"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Active</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isStudent"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Student</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isAdmin"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Admin rights</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
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

import PageTitle from "@/components/common/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lessons",
};

export default function DashboardLessons() {
	return (
		<>
			<PageTitle
				title={typeof metadata.title === "string" ? metadata.title : "Title"}
			/>
		</>
	);
}

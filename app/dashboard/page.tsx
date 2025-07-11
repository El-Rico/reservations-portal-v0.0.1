import PageTitle from "@/components/common/page-title";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function DashboardPage() {
	return (
		<>
			<PageTitle
				title={typeof metadata.title === "string" ? metadata.title : "Title"}
			/>
		</>
	);
}

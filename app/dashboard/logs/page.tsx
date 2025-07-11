import PageTitle from "@/components/common/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Logs",
};

export default function DashboardLogs() {
	return (
		<>
			<PageTitle
				title={typeof metadata.title === "string" ? metadata.title : "Title"}
			/>
		</>
	);
}

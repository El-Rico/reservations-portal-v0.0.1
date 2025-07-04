import Image from "next/image";

export default function CompanyLogo() {
	return (
		<div className="flex gap-2 items-center text-white">
			<Image src="/bookmark.svg" alt="Company logo" width={30} height={30} />
			<span className="uppercase tracking-wider font-bold">Reservations</span>
		</div>
	);
}

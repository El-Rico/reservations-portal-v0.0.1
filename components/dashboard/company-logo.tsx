import Image from "next/image";

export default function CompanyLogo() {
	return (
		<div className="flex gap-2 items-center text-white">
			<Image src="/bookmark.svg" alt="Company logo" width={25} height={25} />
			<span className="uppercase font-light">Reservations</span>
		</div>
	);
}

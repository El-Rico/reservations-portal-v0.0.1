export default function PageTitle({ title }: { title: string }) {
	return (
		<>
			<h1 className="font-bold text-2xl mb-3">{title}</h1>
		</>
	);
}

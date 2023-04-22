import Image from "next/image";

const data = [
	{
		id: 1,
		image: "/ninacapa.jpeg",
		name: "Nina",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 2,
		image: "/kehlani.jpg",
		name: "Kehlani",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 3,
		image: "/bkicarus.jpeg",
		name: "BK",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 4,
		image: "/blond-img.jpeg",
		name: "Frank Ocean",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 5,
		image: "/omeninoqqueriaserdeus.jpg",
		name: "Djonga",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 6,
		image: "/djongaladraocapa.webp",
		name: "Djonga",
		type: "Show • Spotmusic Studios",
	},
	{
		id: 7,
		image: "/amareloemicida.jpeg",
		name: "Emicida",
		type: "Show • Spotmusic Studios",
	},
];

const Recommended = ({ title }) => (
	<section className="flex flex-col">
		<h2 className="text-3xl font-bold mt-8 mb-7">{title}</h2>
		<ul className="flex overflow-x-scroll overflow-y-hidden">
			{data.map(({ id, image, name, type }) => (
				<li key={id} className="min-w-fit flex flex-col mr-5">
					<Image
						src={image}
						width={120}
						height={120}
						alt={name}
						className="w-full rounded-md"
					/>
					<p className="text-sm mt-3 font-bold">{name}</p>
					<p className="text-sm font-medium text-zinc-500">{type}</p>
				</li>
			))}
		</ul>
	</section>
);

export default Recommended;

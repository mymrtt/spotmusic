import Image from "next/image";

const playlists = [
	{
		id: 1,
		image: "/ninacapa.jpeg",
		name: "Nina",
	},

	{
		id: 2,
		image: "/djongaladraocapa.webp",
		name: "Djonga",
	},
	{
		id: 3,
		image: "/amareloemicida.jpeg",
		name: "Emicida",
	},
	{
		id: 4,
		image: "/blond-img.jpeg",
		name: "Frank Ocean",
	},
	{
		id: 5,
		image: "/bkicarus.jpeg",
		name: "BK",
	},
	{
		id: 6,
		image: "/mcluanna.jpeg",
		name: "MC Luanna",
	},
];

const Playlists = () => (
	<section className="grid grid-cols-2 gap-4">
		{playlists.map(({ id, image, name }) => (
			<figure
				key={id}
				className="flex items-center bg-neutral-800 rounded-md overflow-hidden"
			>
				<Image src={image} width={70} height={70} alt={name} className="pr-3" />
				<figcaption>{name}</figcaption>
			</figure>
		))}
	</section>
);

export default Playlists;

"use client";

import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

const Playlists = () => {
	const { data, error, isLoading, isValidating } = useSWR(
		() => "/api/playlist",
		fetcher
	);

	if (isValidating || isLoading || error) return <></>;

	return (
		<section className="grid grid-cols-2 gap-4">
			{data?.map(({ id, image, name }) => (
				<figure
					key={id}
					className="flex items-center bg-neutral-800 rounded-md overflow-hidden"
				>
					<Image
						src={image}
						width={70}
						height={70}
						alt={name}
						className="pr-3"
					/>
					<figcaption>{name}</figcaption>
				</figure>
			))}
		</section>
	);
};

export default Playlists;

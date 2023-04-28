"use client";

import Image from "next/image";

const Recommended = ({ data, title, isValidating, isLoading, error }) => {
	if (isValidating || isLoading || error) return <></>;

	return (
		<section className="flex flex-col">
			<h2 className="text-3xl font-bold mt-8 mb-7">{title}</h2>
			<ul className="flex overflow-x-scroll overflow-y-hidden">
				{data?.map(({ id, image, name, type }) => (
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
};

export default Recommended;

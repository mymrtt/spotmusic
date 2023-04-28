"use client";

import useSWR from "swr";
import Header from "./components/header";
import Playlists from "./components/playlists";
import Recommended from "./components/recommended";
import NavBar from "./components/navbar";
import Player from "./components/player";
import { fetcher } from "./utils/fetcher";

const Home = () => {
	const {
		data: playlistData,
		error: playlistError,
		isLoading: playlistIsLoading,
		isValidating: playlistIsValidating,
	} = useSWR(() => "/api/playlist", fetcher);

	const {
		data: yourShowsData,
		error: yourShowsError,
		isLoading: yourShowsIsLoading,
		isValidating: yourShowsIsValidating,
	} = useSWR(() => "/api/your-shows", fetcher);

	const {
		data: jumpBackInData,
		error: jumpBackInError,
		isLoading: jumpBackInIsLoading,
		isValidating: jumpBackInIsValidating,
	} = useSWR(() => "/api/jump-back-in", fetcher);

	return (
		<main className="flex min-h-screen flex-col px-3 pb-48">
			<Header />
			{playlistData?.length && (
				<Playlists
					data={playlistData}
					isValidating={playlistError}
					isLoading={playlistIsLoading}
					error={playlistIsValidating}
				/>
			)}
			{yourShowsData?.length && (
				<Recommended
					title="Your Shows"
					data={yourShowsData}
					isValidating={yourShowsIsValidating}
					isLoading={yourShowsIsLoading}
					error={yourShowsError}
				/>
			)}
			{jumpBackInData?.length && (
				<Recommended
					title="Jump back in"
					data={jumpBackInData}
					isValidating={jumpBackInIsValidating}
					isLoading={jumpBackInIsLoading}
					error={jumpBackInError}
				/>
			)}
			<Player />
			<NavBar />
		</main>
	);
};

export default Home;

import Header from "./components/header";
import Playlists from "./components/playlists";
import Recommended from "./components/recommended";
import NavBar from "./components/navbar";
import Player from "./components/player";

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col px-3 pb-48">
			<Header />
			<Playlists />
			<Recommended title="Your Shows" />
			<Recommended title="Jump back in" />
			<Player />
			<NavBar />
		</main>
	);
};

export default Home;

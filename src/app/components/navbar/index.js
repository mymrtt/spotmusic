import { Home as HomeIcon, Search, Library } from "lucide-react";

const items = [
	{
		id: 1,
		icon: "home",
		text: "Home",
	},
	{
		id: 2,
		icon: "search",
		text: "Search",
	},
	{
		id: 3,
		icon: "library",
		text: "Library",
	},
];

const iconsTranslated = {
	home: HomeIcon,
	search: Search,
	library: Library,
};

const NavBar = () => (
	<div className="fixed bottom-0 left-0 right-0 flex p-3 justify-around bg-stone-900">
		{items.map(({ id, icon, text }) => {
			const CurrentIcon = iconsTranslated[icon];

			return (
				<a
					href="#"
					key={id}
					className="flex flex-col items-center justify-center"
				>
					<CurrentIcon size={26} alt={text} className="text-zinc-400" />
					<p className="text-xs mt-2 text-zinc-400">{text}</p>
				</a>
			);
		})}
	</div>
);

export default NavBar;

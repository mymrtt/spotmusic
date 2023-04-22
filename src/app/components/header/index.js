import { Bell, History, Settings } from "lucide-react";

const Header = () => (
	<header className="flex w-full justify-between mt-8 mb-5">
		<h1 className="text-3xl font-bold">Good night</h1>
		<div className="flex gap-6">
			<Bell alt="Notification" size={30} />
			<History alt="History" size={30} />
			<Settings alt="Settings" size={30} />
		</div>
	</header>
);

export default Header;

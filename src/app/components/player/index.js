import { MonitorSpeaker, Heart, Play } from "lucide-react";
import Image from "next/image";

const Player = () => (
	<div className="fixed bottom-20 left-1 right-1 flex p-3 bg-stone-500 rounded-xl">
		<Image
			src="/mcluanna.jpeg"
			width={70}
			height={70}
			alt="Capa do álbum da MC Luanna"
			className="rounded-md mr-3"
		/>
		<div className="w-full flex justify-between">
			<span>
				<p className="text-sm mt-3 font-bold">44</p>
				<p className="text-sm font-medium">MC Luanna</p>
			</span>
			<span className="flex gap-4 items-center">
				<MonitorSpeaker size={26} />
				<Heart size={26} className="text-lime-500 fill-current" />
				<Play size={26} className="text-white fill-current" />
			</span>
		</div>
	</div>
);

export default Player;

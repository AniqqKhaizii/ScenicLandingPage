import ChromaGrid from "./components/ChromaGrid";
const items = [
	{
		image: "https://ioc.spkb.com.my/logo-W.png",
		title: "SPKB IOC",
		subtitle: "Elix Solution Sdn. Bhd.",
		url: "https://ioc.spkb.com.my/SPKB_IOC/MPHS",
	},
	{
		image: "https://ioc.spkb.com.my/ComingSoon.jpg",
		title: "System Name",
		subtitle: "Company Name",
		url: "",
	},
	{
		image: "https://ioc.spkb.com.my/ComingSoon.jpg",
		title: "System Name",
		subtitle: "Company Name",
		url: "",
	},
	{
		image: "https://ioc.spkb.com.my/ComingSoon.jpg",
		title: "System Name",
		subtitle: "Company Name",
		url: "",
	},
];

export default function App() {
	return (
		<div className="relative min-h-screen max-w-screen overflow-x-hidden">
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				{/* You can add mp4 as a fallback */}
				<source src="/video-bg.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Content */}
			<div className="relative z-10 flex flex-col min-h-screen backdrop-blur-md items-center justify-center text-white starting:translate-y-10 translation-y-0 transition-transform duration-700">
				<ChromaGrid
					className="w-full h-full"
					items={items}
					radius={300}
					damping={0.45}
					fadeOut={0.6}
					ease="power3.out"
				/>
				<div className="absolute bottom-5 left-5 flex flex-col items-center justify-center">
					<img
						src="/logo.png"
						alt="logo"
						className="w-auto h-10 white-shadow"
					/>
				</div>
			</div>
		</div>
	);
}

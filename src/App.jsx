import ChromaGrid from "./components/ChromaGrid";
const items = [
	{
		image: "https://ioc.spkb.com.my/logo-W.png",
		title: "SPKB IOC",
		subtitle: "Elix Solution Sdn. Bhd.",
		url: "https://ioc.spkb.com.my/SPKB_IOC/MPHS",
		logoUrl: "https://www.elix.com.my/ELIX_Logo.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://upcdn.io/kW15c1V/image/platform/4jhvF76e3U-denisa-elena-ficau-34OrHR9jK6o-unsplash.jpg.crop?w=600&amp;h=600&amp;fit=max&amp;q=70",
		title: "Smart Food Storage",
		subtitle: "Favoriot",
		url: "https://platform.favoriot.com/public/aYB-rc-HZO5Pkjt9IY4qVg2UVtQ6eUiu",
		logoUrl:
			"https://www.favoriot.com/wp-content/uploads/2025/04/favoriot-logo-website.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://upcdn.io/kW15c1V/image/platform/4jhv4PuoDs-dane-deaner-_-KLkj7on_c-unsplash.jpg?w=600&amp;h=600&amp;fit=max&amp;q=70",
		title: "Smart Office",
		subtitle: "Favoriot",
		url: "https://platform.favoriot.com/public/T2SlRryUUX1qRoHnyB378YwmGt1dkPqU",
		logoUrl:
			"https://www.favoriot.com/wp-content/uploads/2025/04/favoriot-logo-website.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://upcdn.io/kW15c1V/image/platform/4jhvvVUkJT-erwan-hesry-1q75BReKpms-unsplash.jpg?w=600&amp;h=600&amp;fit=max&amp;q=70",
		title: "Smart Agriculture",
		subtitle: "Favoriot",
		url: "https://platform.favoriot.com/public/vY4KVVlr8-3vTKWX3TKalbbG_kl9wE1V",
		logoUrl:
			"https://www.favoriot.com/wp-content/uploads/2025/04/favoriot-logo-website.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://lh3.googleusercontent.com/RkzdHZJZnRG3V_pRCKtnLJWf_V61Xj3K7WGDC3P0X7J-OPTwDHq_f6jLfibFKuAbV6HgfQ1c9pK7hfDD8g19LfUE8ka-xcpBFGcR=h200",
		title: "TrackSolid Pro",
		subtitle: "Bateriku",
		url: "https://www.tracksolidpro.com/resource/dev/index.html?t=243084#/login",
		logoUrl: "https://www.bateriku.com/favicon-32x32.png",
		imgCn: "object-stretch",
	},
	{
		image: "/pedestrians.webp",
		title: "Smart Pedestrian",
		subtitle: "Vectolabs Technologies Sdn Bhd",
		url: "https://pedestrian.vectolabs.com/auth/login",
		logoUrl:
			"https://www.vectolabs.com/wp-content/uploads/2023/11/Vectolabs-No-Subtext-150x84.png",
		imgCn: "object-cover",
	},
	{
		image: "/scs-video.jpg",
		title: "Secure Video Conference",
		subtitle: "SCS ",
		url: "https://lkim.scseng.my/",
		logoUrl: "https://www.scs.my/assets/images/logo-normal-scs.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://www.monash.edu/__data/assets/image/0011/3817028/smart-city-illustration.jpg",
		title: "City Sense - The Living City",
		subtitle: "SCS ",
		url: "https://gis2u.mpkj.gov.my/",
		logoUrl: "https://www.scs.my/assets/images/logo-normal-scs.png",
		imgCn: "object-cover",
	},
	{
		image:
			"https://img.freepik.com/free-photo/cctv-security-camera_1359-621.jpg?semt=ais_hybrid&w=740",
		title: "iPantau",
		subtitle: "SCS ",
		url: "https://ipantau.sdev.my/",
		logoUrl: "https://www.scs.my/assets/images/logo-normal-scs.png",
		imgCn: "object-cover",
	},
	{
		image: "https://mobiva.net/wp-content/uploads/2021/03/mobiva-logo-top.png",
		title: "Mobiva Community",
		subtitle: "Mobiva ",
		url: "https://community.mobiva.net/Login?ReturnUrl=%2f",
		logoUrl:
			"https://mobiva.net/wp-content/uploads/2021/03/mobiva-logo-top.png",
		imgCn: "object-contain",
	},
	{
		image:
			"https://plurilock.com/wp-content/uploads/2024/02/dreamstime_m_137534981-1024x661.jpg",
		title: "Reyhut AI",
		subtitle: "Reyhut AI",
		url: "https://reyhut.ai/version-test/face",
		logoUrl:
			"https://16323b8ef0563e40371a7997a9bea1b9.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1742895681587x587609993206408100/Reyhut%20-%20Logo%20V2%20%281%29.png",
		imgCn: "object-cover",
	},
	{
		image: "https://www.justnaik.com/img/logo.png",
		title: "Just Naik",
		subtitle: "Hexon Data Sdn Bhd",
		url: "https://dashboard.justnaik.com/signin",
		logoUrl:
			"https://mobiva.net/wp-content/uploads/2021/03/mobiva-logo-top.png",
		imgCn: "object-contain",
	},
	{
		image: "https://poc.mdanalytic.my/assets/MD_logo-BT0-fTGv.png",
		title: "MD Analytic",
		subtitle: "Map2U",
		url: "https://community.mobiva.net/Login?ReturnUrl=%2f",
		logoUrl: "https://www.map2u.com.my/images/LOGO-MAP2U-white-p-500.png",
		imgCn: "object-contain",
	},
	{
		image: "https://www.map2u.com.my/images/LOGO-MAP2U-white-p-500.png",
		title: "Portal Map2U",
		subtitle: "Map2U",
		url: "https://community.mobiva.net/Login?ReturnUrl=%2f",
		logoUrl: "https://www.map2u.com.my/images/LOGO-MAP2U-white-p-500.png",
		imgCn: "object-contain",
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
			<div className="relative z-10 px-6 lg:py-12 py-24 flex flex-col min-h-screen backdrop-blur-md items-center justify-center text-white starting:translate-y-10 translation-y-0 transition-transform duration-700">
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

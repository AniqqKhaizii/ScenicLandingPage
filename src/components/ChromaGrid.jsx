import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";

const ChromaGrid = ({
	items,
	className = "",
	radius = 300,
	damping = 0.45,
	fadeOut = 0.6,
	ease = "power3.out",
}) => {
	const rootRef = useRef(null);
	const fadeRef = useRef(null);
	const setX = useRef(null);
	const setY = useRef(null);
	const pos = useRef({ x: 0, y: 0 });

	const data = items?.length ? items : demo;

	useEffect(() => {
		const el = rootRef.current;
		if (!el) return;
		setX.current = gsap.quickSetter(el, "--x", "px");
		setY.current = gsap.quickSetter(el, "--y", "px");
		const { width, height } = el.getBoundingClientRect();
		pos.current = { x: width / 2, y: height / 2 };
		setX.current(pos.current.x);
		setY.current(pos.current.y);
	}, []);

	const moveTo = (x, y) => {
		gsap.to(pos.current, {
			x,
			y,
			duration: damping,
			ease,
			onUpdate: () => {
				setX.current?.(pos.current.x);
				setY.current?.(pos.current.y);
			},
			overwrite: true,
		});
	};

	const handleMove = (e) => {
		const r = rootRef.current.getBoundingClientRect();
		moveTo(e.clientX - r.left, e.clientY - r.top);
		gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
	};

	const handleLeave = () => {
		gsap.to(fadeRef.current, {
			opacity: 1,
			duration: fadeOut,
			overwrite: true,
		});
	};

	const handleCardClick = (url) => {
		if (url) window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleCardMove = (e) => {
		const c = e.currentTarget;
		const rect = c.getBoundingClientRect();
		c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
		c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			ref={rootRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className={`relative w-full h-full flex flex-col justify-center items-center gap-12 bg-transparent ${className}`}
			style={{
				"--r": `${radius}px`,
				"--x": "50%",
				"--y": "50%",
			}}
		>
			<div>
				<h1 className="text-[clamp(2rem,2vw,3.5rem)] font-bold font-michroma text-center drop-shadow-lg">
					SCENIC - Integrated Operation Center
				</h1>
				<hr className="my-1 h-[2px] w-full border-none bg-gradient-to-r from-transparent via-white to-transparent" />
			</div>
			<div
				className={`relative w-full flex flex-wrap justify-center items-center gap-12 bg-transparent`}
			>
				{data.map((c, i) => (
					<article
						key={i}
						onMouseMove={handleCardMove}
						onClick={() => handleCardClick(c.url)}
						className="group relative flex flex-col h-[400px] w-[300px] rounded-[20px] overflow-hidden border hover:border-purple-500 hover:scale-105 border-white/40 shadow-lg transition-all duration-300 cursor-pointer"
						style={{
							"--card-border": c.borderColor || "transparent",
							"--spotlight-color": "rgba(255,255,255,0.2)",
						}}
					>
						<div
							className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:bg-blue-500 group-hover:opacity-100"
							style={{
								background:
									"radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
							}}
						/>
						<div className="relative z-10 flex-1 p-[10px] box-border">
							<img
								src={c.image}
								alt={c.title}
								loading="lazy"
								className={` w-full h-full ${c.imgCn} rounded-[10px] drop-shadow-md `}
							/>
						</div>
						<footer className="relative z-50 p-3 text-white font-sans flex flex-col">
							<h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
							<hr className="my-1 h-[1px] border-none bg-gradient-to-r from-transparent via-white to-transparent" />
							<div className="flex items-center justify-between">
								<p className="m-0 text-[0.85rem] opacity-85 italic">
									{c.subtitle}
								</p>
								<img src={c.logoUrl} alt={c.subtitle} className="h-6" />
							</div>
						</footer>
					</article>
				))}

				<div
					className="absolute inset-0 pointer-events-none z-30"
					style={{
						backdropFilter: "grayscale(1) brightness(0.78)",
						WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
						background: "rgba(0,0,0,0.001)",
						maskImage:
							"radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
						WebkitMaskImage:
							"radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
					}}
				/>
				<div
					ref={fadeRef}
					className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
					style={{
						backdropFilter: "grayscale(1) brightness(0.78)",
						WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
						background: "rgba(0,0,0,0.001)",
						maskImage:
							"radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
						WebkitMaskImage:
							"radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
						opacity: 1,
					}}
				/>
			</div>
		</motion.div>
	);
};

export default ChromaGrid;

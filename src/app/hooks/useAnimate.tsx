import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

export const useAnimate = () => {
	gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);
	
	const leftSlide = gsap.to(".sittedUser", {
		x: -1000,
		duration: 2,
		scrollTrigger: {
			trigger: ".sittedUser",
			scrub: true,
			start: "center center",
		},
	});

	const rightSlide = gsap.to(".invoice", {
		x: 1000,
		scrollTrigger: {
			trigger: ".sittedUser",
			scrub: true,
			start: "center center",
		},
	});

	useGSAP(() =>
		ScrollSmoother.create({
			smooth: 2,
			effects: true,
		})
	);
	useGSAP(() => {
		gsap.to(".focus", {
			y: 150,
			scrollTrigger: {
				trigger: ".focus",
				scrub: true,
				onUpdate: (self) => {
					if (self.progress === 0.5) {
						rightSlide.play();
						leftSlide.play();
					}
				},
				pin: true,
				start: "center center",
			},
		});
	});
	return null;
};

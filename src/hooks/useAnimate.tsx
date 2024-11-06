import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export const useAnimate = ({
	sittedUserRef,
	invoiceRef,
	focusRef,
}: {
	sittedUserRef: MutableRefObject<HTMLImageElement | null>;
	invoiceRef: MutableRefObject<HTMLImageElement | null>;
	focusRef: MutableRefObject<HTMLDivElement | null>;
}) => {
	const mediaQuery = gsap.matchMedia();
	useGSAP(() => {
		const leftSlide = gsap.to(sittedUserRef.current, {
			x: -1000,
			duration: 2,
			scrollTrigger: {
				trigger: ".sittedUser",
				scrub: true,
				start: "center center",
			},
		});

		const rightSlide = gsap.to(invoiceRef.current, {
			x: 1000,
			scrollTrigger: {
				trigger: ".sittedUser",
				scrub: true,
				start: "center center",
			},
		});

		ScrollSmoother.create({
			smooth: 2,
			effects: true,
		});
		mediaQuery.add(
			{
				isDesktop: "(min-width: 1024px)",
				isMobile: "(max-width: 700px)",
			},
			(context) => {
				const { isDesktop } = context.conditions as {
					[key: string]: boolean;
				};
				gsap.to(focusRef.current, {
					y: isDesktop ? 250 : 50,

					scrollTrigger: {
						trigger: focusRef.current,
						scrub: true,

						onUpdate: (self) => {
							if (self.progress === 0.5 && isDesktop) {
								rightSlide.play();
								leftSlide.play();
							}
						},
						pin: true,
						start: isDesktop ? "center center" : "",
					},
				});
				if (isDesktop) {
					gsap.fromTo(
						".tabController",
						{ opacity: 0 },
						{
							opacity: 1,
							scrollTrigger: {
								trigger: ".tabController",
								start: "top 50%",
								end: "bottom 20%",
								scrub: true,
							},
						}
					);
				}
			}
		);
		// mediaQuery.revert();
		// mediaQuery.add("(min-width: 0px)", () => {
		// 	gsap.to(focusRef.current, {
		// 		y: 50,

		// 		scrollTrigger: {
		// 			trigger: focusRef.current,
		// 			scrub: true,

		// 			onUpdate: (self) => {
		// 				if (self.progress === 0.5) {
		// 					rightSlide.play();
		// 					leftSlide.play();
		// 				}
		// 			},
		// 			pin: true,
		// 			start: "center center",
		// 		},
		// 	});
		// });
	});

	return null;
};

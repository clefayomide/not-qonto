import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { MutableRefObject } from "react";

// if (typeof window !== "undefined") {
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);
// }
export const useAnimate = ({
	sittedUserRef,
	invoiceRef,
	focusRef,
}: {
	sittedUserRef: MutableRefObject<HTMLImageElement | null>;
	invoiceRef: MutableRefObject<HTMLImageElement | null>;
	focusRef: MutableRefObject<HTMLDivElement | null>;
}) => {
	useGSAP(
		() => {
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
			gsap.to(focusRef.current, {
				y: 200,
				scrollTrigger: {
					trigger: focusRef.current,
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
		},
		{
			dependencies: [
				sittedUserRef.current?.complete,
				invoiceRef.current?.complete,
			],
			revertOnUpdate: true,
		}
	);

	return null;
};

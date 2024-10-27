"use client";

import Link from "next/link";
import { AppButton, AppTypography } from "./components";
import { HeadPhone } from "./assets";
import Image from "next/image";
import sittedUser from "./assets/sitted-user.png";
import Lottie from "react-lottie";
import animationData from "./assets/lottie.json";
import invoice from "./assets/invoice2.webp";

import { useAnimate } from "./hooks/useAnimate";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function Home() {
	useAnimate();
	return (
		<div id="smooth-content" className="mt-[80px] pb-[2000px]">
			<section>
				<AppTypography
					variant="h1"
					className="text-center  font-medium text-[56px] leading-[56px] text-typography"
				>
					The business account that gets jobs
					<br /> done.
				</AppTypography>
				<AppTypography
					variant="p"
					className="text-center leading-[24px] font-light text-lg text-typography mt-5"
				>
					Business banking, made better: an online account that helps you pay,
					get paid, invoice, bookkeep,
					<br /> manage expenses, find financing & oversee cash flow.
				</AppTypography>
				<Link href="">
					<AppButton
						variant="primary"
						className="mt-8 flex items-center m-auto"
					>
						Discover our offers
					</AppButton>
				</Link>
				<AppTypography
					className="text-typography_gray text-sm leading-6 text-center mt-5 font-light"
					variant="p"
				>
					From €9/month excl. VAT. Try it free for 30 days.
				</AppTypography>
				<AppTypography
					variant="div"
					className="text-xs text-typography flex justify-center items-center gap-2 mt-4"
				>
					<HeadPhone />
					7-day-a-week customer service
				</AppTypography>
			</section>
			<section className="relative flex justify-between">
				<Image
					className="sittedUser w-[28%] h-[400px] absolute object-contain  -top-[100px] max-w-full"
					src={sittedUser}
					alt="Qonto user holding qonto card"
				/>
				<div className="focus relative w-full">
					<Link href={"/"}>
						<Lottie
							options={defaultOptions}
							height={400}
							width={400}
							isStopped={true}

							// isStopped={this.state.isStopped}
							// isPaused={this.state.isPaused}
						/>
					</Link>
				</div>
				<Image
					className="w-[30%] invoice h-[400px] object-cover absolute  -top-40 -right-5 max-w-full"
					src={invoice}
					decoding="async"
					loading="lazy"
					alt="Qonto invoice dashboard"
				/>
			</section>
		</div>
	);
}

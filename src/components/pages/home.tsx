"use client";
import React, { useRef } from "react";
import { AppButton, AppTypography } from "..";
import Link from "next/link";
import { Capricorn, Dot, HeadPhone, RatingIcon } from "@/assets";
import Image from "next/image";
import sittedUser from "../../assets/sitted-user.png";
import invoice from "../../assets/invoice2.webp";
import { useAnimate } from "../../hooks/useAnimate";
import animationData from "../../assets/lottie.json";
import animationData2 from "../../assets/lottie2.json";
import Lottie from "react-lottie";
import { sliderCardColor } from "@/constants";

const Home = () => {
	const sittedUserRef = useRef<HTMLImageElement | null>(null);
	const invoiceRef = useRef<HTMLImageElement | null>(null);
	const focusRef = useRef<HTMLDivElement | null>(null);

	const defaultOptions1 = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const defaultOptions2 = {
		loop: true,
		autoplay: true,
		animationData: animationData2,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	useAnimate({ sittedUserRef, invoiceRef, focusRef });

	return (
		<div id="smooth-content" className="mt-[80px]">
			<section>
				<AppTypography
					variant="h1"
					className="text-center lg:w-[950px] lg:m-auto  font-medium text-[40px] leading-[40px] md:text-[56px] md:leading-[56px] text-typography"
				>
					The business account that gets jobs done.
				</AppTypography>
				<AppTypography
					variant="p"
					className="text-center lg:w-[800px] lg:m-auto text-base leading-[24px] font-light md:text-lg text-typography !mt-5"
				>
					Business banking, made better: an online account that helps you pay,
					get paid, invoice, bookkeep, manage expenses, find financing & oversee
					cash flow.
				</AppTypography>
				<Link href="">
					<AppButton
						variant="primary"
						className="mt-8 !w-[180px] text-center flex items-center m-auto"
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
					className="hidden md:block sittedUser w-[28%] h-[400px] object-contain -mt-[100px]  -top-[100px] max-w-full"
					src={sittedUser}
					ref={sittedUserRef}
					alt="Qonto user holding qonto card"
				/>
				<div
					ref={focusRef}
					className="focus absolute z-20 left-1/2 transform -translate-x-1/2 w-fit"
				>
					<Link href={"/"}>
						<Lottie
							options={defaultOptions1}
							height={400}
							width={400}
							isPaused={true}
						/>
					</Link>
				</div>
				<Image
					className="w-[30%] hidden md:block invoice h-[400px] object-cover -mt-[160px]  -top-40 -right-5 max-w-full"
					src={invoice}
					ref={invoiceRef}
					onLoadingComplete={() => console.log("loaded 2")}
					decoding="async"
					loading="lazy"
					alt="Qonto invoice dashboard"
				/>
			</section>
			<section className="px-0 mt-[300px]">
				<ul className=" hidden md:flex tabController text-typography_unfocus m-auto border-b border-[#636360] w-fit px-3  gap-8 items-center">
					<li>
						<AppButton className="text-typography font-medium !text-lg">
							Business Account & Cards
						</AppButton>
					</li>
					<li>
						<AppButton className="!text-lg">Invoice Management</AppButton>
					</li>
					<li>
						<AppButton className="!text-lg">
							Expense & Spend Management
						</AppButton>
					</li>
					<li>
						<AppButton className="!text-lg">Bookkeeping & Cash Flow</AppButton>
					</li>
				</ul>
				<div className="flex justify-between mt-[80px] md:items-center">
					<div className="hidden md:block w-full md:w-[calc(100%-950px)]">
						<div className="flex text-xs font-medium gap-3 items-center">
							<AppTypography variant="h6" className="flex items-center gap-3">
								CARDS <Dot />
							</AppTypography>
							<AppTypography variant="h6" className="flex items-center gap-3">
								TRANSFER <Dot />
							</AppTypography>
							<AppTypography variant="h6">FINANCING</AppTypography>
						</div>
						<AppTypography className="text-[35px] font-medium text-typography mt-3 leading-[48px]">
							An online account that means business
						</AppTypography>
						<AppTypography
							variant="p"
							className="text-typography text-base mt-3 leading-[24px font-light]"
						>
							Easy day-to-day banking: local IBAN, free Mastercards, instant &
							international transfers, financing solutions. All included in your
							plan.
						</AppTypography>
						<Link className="" href="">
							<AppButton
								variant="primary"
								className="mt-8 !w-[180px] !border-2 !border-red-500 text-center flex items-center"
							>
								Open an account
							</AppButton>
						</Link>
					</div>
					<div className="flex flex-col md:flex-row md:justify-end">
						<div
							style={{ backgroundColor: sliderCardColor[0] }}
							className="w-full md:w-[450px] rounded-xl hover:rounded-2xl h-[600px] md:h-[500px] md:absolute focus z-10 left-1/2 md:transform md:-translate-x-1/2 "
						></div>
						<div
							style={{ backgroundColor: sliderCardColor[1] }}
							className="w-full md:w-[400px] rounded-xl hover:rounded-2xl h-[500px] "
						>
							<Link href={"/"}>
								<Lottie
									options={defaultOptions2}
									// height={400}
									// width={400}
									isPaused={true}
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-[100px] py-5 flex flex-col md:flex-row md:items-center md:justify-between border-y-[0.5px] border-typography_unfocus ">
				<AppTypography
					className="text-2xl text-typography font-medium"
					variant="h2"
				>
					Loved & trusted by +500,000 businessesss.
				</AppTypography>
				<div className="flex mt-10 md:mt-0 flex-wrap gap-10 md:gap-14 md:items-center">
					<div className="flex w-fit flex-col gap-3">
						<div className="flex md:text-2xl leading-[24px] text-typography font-normal items-center gap-1">
							4.7
							<RatingIcon />
						</div>
						<div className="flex text-sm leading-[24px] font-light">
							<Capricorn />
							on Trustpilot
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex md:text-2xl leading-[24px] text-typography font-normal items-center gap-1">
							4.7
							<RatingIcon />
						</div>
						<div className="flex text-sm leading-[24px] font-light">
							<Capricorn />
							on Trustpilot
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex md:text-2xl leading-[24px] text-typography font-normal items-center gap-1">
							4.7
							<RatingIcon />
						</div>
						<div className="flex text-sm leading-[24px] font-light">
							<Capricorn />
							on Trustpilot
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex md:text-2xl leading-[24px] text-typography font-normal items-center gap-1">
							4.7
							<RatingIcon />
						</div>
						<div className="flex text-sm leading-[24px] font-light">
							<Capricorn />
							on Trustpilot
						</div>
					</div>
				</div>
			</section>

			<section className="h-[200px]"></section>
		</div>
	);
};

export default Home;

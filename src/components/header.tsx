import Link from "next/link";
import { Logo } from "../assets";
import { AppButton } from ".";

export const Header = () => {
	return (
		<header className="h-[80px] !w-[100vw] !fixed top-0 z-40">
			<nav className="px-5 h-full w-full flex justify-between items-center shadow-[0px_3px_6px_0px_rgba(29,29,27,0.06)]">
				<div>
					<ul className="flex font-normal items-center gap-8">
						<li>
							<Link href={"/"}>
								<Logo />
							</Link>
						</li>
						<li className="ml-10 hidden md:inline-block text-typography text-lg leading-[24px] ">
							<Link href={"/solution"}>Solution</Link>
						</li>
						<li className="text-typography hidden md:inline-block text-lg leading-[24px] ">
							<Link href={"/products"}>Products</Link>
						</li>
						<li className="text-typography hidden md:inline-block text-lg leading-[24px] ">
							<Link href={"/pricing"}>Pricing</Link>
						</li>
						<li className="text-typography hidden md:inline-block text-lg leading-[24px] ">
							<Link href={"/resource"}>Resources</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex gap-5 md:gap-1 items-center">
						<li className="font-light hidden md:inline-block text-lg leading-[24px]">
							<Link href={"/signin"}>
								<AppButton>Sign in</AppButton>
							</Link>
						</li>
						<li>
							<Link href={"/signup"}>
								<AppButton
									className="text-xs md:text-base h-[40px] md:h-[40px]"
									variant="primary"
								>
									Open an account
								</AppButton>
							</Link>
						</li>
						<li className="flex md:hidden flex-col justify-end gap-4">
							<div className="w-[30px] h-[1px] bg-black"></div>
							<div className="w-[30px] h-[1px] bg-black"></div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

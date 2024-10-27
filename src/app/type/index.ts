export type ButtonPropType = {
	variant?: "primary" | "secondary";
} & JSX.IntrinsicElements["button"];

type TypographyVariantType = keyof JSX.IntrinsicElements;

export type TypographyPropType = {
	variant?: TypographyVariantType;
	children: React.ReactNode;
	className?: string;
};

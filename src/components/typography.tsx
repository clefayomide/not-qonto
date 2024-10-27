import { TypographyPropType } from "../type";
import { classnames } from "../utils";

export const Typography = (props: TypographyPropType) => {
	const { variant: Variant = "div", children, className = "", ...rest } = props;
	return (
		<Variant className={classnames("text-typography", className)} {...rest}>
			{children}
		</Variant>
	);
};

import type { FC, HtmlHTMLAttributes } from "react";

export interface TextProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
    children?: React.ReactNode;
    className?: string;
}

const Text: FC<TextProps> = ({
    children,
    className,
    ...props
}) => {
    const componentClassName = [
        className,
    ].join(" ").trim();

    return (
        <div
            className={componentClassName}
            {...props}
        >
            {children}
        </div>
    )
}

export default Text;
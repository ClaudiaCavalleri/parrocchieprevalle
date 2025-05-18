import type { FC, HtmlHTMLAttributes } from "react";

export interface TextProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    size?: string;
}

const Text: FC<TextProps> = ({
    children,
    className,
    color,
    size,
    ...props
}) => {
    const componentClassName = [
        className ? className : "",
        color ? color : "",
        size ? size : ""
    ].join(" ").trim();

    const htmlContent : { __html: string | TrustedHTML } = {
        __html: children as string,
    }

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
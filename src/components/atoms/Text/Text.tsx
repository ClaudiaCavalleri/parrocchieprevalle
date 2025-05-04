import type { FC, HtmlHTMLAttributes } from "react";

export interface TextProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
    align?: 'text-left' | 'text-center' | 'text-right' | 'text-justify';
    children?: React.ReactNode;
    className?: string;
    color?: string;
    size?: string;
}

const Text: FC<TextProps> = ({
    align = 'text-left',
    children,
    className,
    color,
    size,
    ...props
}) => {
    const componentClassName = [
        align ? align : "",
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
            dangerouslySetInnerHTML={htmlContent}
            {...props}
        />
    )
}

export default Text;
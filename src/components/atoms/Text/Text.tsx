import type { FC, HtmlHTMLAttributes } from "react";

export interface TextProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
    children?: React.ReactNode;
    className?: string;
    tag?: React.ElementType;
}

const Text: FC<TextProps> = ({
    children,
    className,
    tag: Tag = 'p',
    ...props
}) => {
    const componentClassName = [
        className,
    ].join(" ").trim();

    return (
        <Tag
            className={componentClassName}
            {...props}
        >
            {children}
        </Tag>
    )
}

export default Text;
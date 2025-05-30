import type { FC } from "react";
import type { TextRowProps } from "../../molecules/TextRow/TextRow";

import TextRow from "../../molecules/TextRow/TextRow";

interface TabProps {
    list?: TextRowProps[];
}

const Tab: FC<TabProps> = ({
    list = [],
}) => {

    return (
        <table className="tab-wrapper">
            <tbody>
                {list.map((item, index) => (
                    <TextRow 
                        key={index}
                        tag="tr"
                        subtitle={item.subtitle}
                        text={item.text}
                        subtitleProps={item.subtitleProps}
                        textProps={item.textProps}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Tab;
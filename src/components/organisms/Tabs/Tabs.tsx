import type { FC } from "react";
import TabsItem, { TabsItemProps } from "../../molecules/TabsItem/TabsItem";

interface Tabsprops {
    list?: TabsItemProps[];
}

const Tabs: FC<Tabsprops> = ({
    list = [],
}) => {

    return (
        <div className="tabs-wrapper">
            {
                list.map((item, index) => (
                    <TabsItem 
                        key={index}
                        title={item.title}
                        text={item.text}
                    />
                ))
            }
        </div>
    )
}

export default Tabs;
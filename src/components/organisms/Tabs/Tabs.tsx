import type { FC } from "react";
import TabsItem, { TabsItemProps } from "../../molecules/TabsItem/TabsItem";
import { tabHeadMesse } from "../../../data/orariMesse";

interface Tabsprops {
    list?: TabsItemProps[];
}

const Tabs: FC<Tabsprops> = ({
    list = [],
}) => {

    return (
        <table className="tabs-wrapper">
            <thead>
                <TabsItem 
                    title={tabHeadMesse.title}
                    text={tabHeadMesse.text}
                />
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TabsItem 
                        key={index}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Tabs;
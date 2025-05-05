import type { FC } from "react";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import Tabs from "../../organisms/Tabs/Tabs";
import { messeData } from "../../../data/orariMesse";

interface TabsSectionProps {}

const TabsSection: FC<TabsSectionProps> = ({

}) => {

    return (
        <Section>
            <Container>
                <Tabs 
                    list={messeData}
                />
            </Container>
        </Section>
    )
}

export default TabsSection;
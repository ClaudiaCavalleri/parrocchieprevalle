import type { FC } from "react";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import Content, { ContentProps } from "../../molecules/Content/Content";

interface BannerSectionProps {
    titleContent?: Omit<ContentProps, 'columns'|'ctaClassName'|'label'>
}

const BannerSection: FC<BannerSectionProps> = ({
    titleContent,
}) => {

    return (
        <Section className="bg-secondary-light">
            <Container>
                <div>
                    <Content {...titleContent}/>
                    <div className="grid-container">
                        <Content 
                            title="test 1"
                            subtitle="subtitle 1"
                            text="IT33X 89348239873367837299018000000001"
                        />
                        <Content 
                            title="test 2"
                            subtitle="subtitle 2"
                            text="IT33X 89348239873367837299018000000001"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BannerSection;
import type { FC } from "react";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import Content, { ContentProps } from "../../molecules/Content/Content";
import { codiciIabn } from "../../../data/codiciIban";

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
                            title={codiciIabn[0].title}
                            subtitle=""
                            text={codiciIabn[0].text[0]}
                        />
                        <Content 
                            title={codiciIabn[1].title}
                            subtitle=""
                            text={codiciIabn[1].text[0]}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BannerSection;
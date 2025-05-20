import type { FC } from "react";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import MediaContent, { MediaContentProps } from "../../organisms/MediaContent/MediaContent";

interface MediaContentSectionProps {
    mediaContent: MediaContentProps;
    idSection?: string;
}

const MediaContentSection: FC<MediaContentSectionProps> = ({
    mediaContent,
    idSection = '',
}) => {

    return (
        <Section id={idSection}>
            <Container>
                <MediaContent 
                    {...mediaContent}
                />
            </Container>
        </Section>
    )
}

export default MediaContentSection;
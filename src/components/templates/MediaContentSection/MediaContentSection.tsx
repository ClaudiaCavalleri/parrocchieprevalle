import type { FC } from "react";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import MediaContent from "../../organisms/MediaContent/MediaContent";

interface MediaContentSectionProps {

}

const MediaContentSection: FC<MediaContentSectionProps> = ({

}) => {

    return (
        <Section>
            <Container>
                <MediaContent 
                    title="media Content Test Title"
                    subtitle="lorem ipsum dolor sit amet"
                    imageUrl="https://images.unsplash.com/photo-1679254137914-afc36bd91a02?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </Container>
        </Section>
    )
}

export default MediaContentSection;
import type { FC } from "react";
import type { ImageProps } from "../../atoms/Image/Image";

import Container from "../../atoms/Container/Container";
import Section from "../../atoms/Section/Section";
import SliderGallery from "../../organisms/SliderGallery/SliderGallery";

interface SliderGallerySectionProps {
    mediaList?: ImageProps[];
    idSection?: string;
}

const SliderGallerySection: FC<SliderGallerySectionProps> = ({
    mediaList,
    idSection = '',
}) => {

    return (
        <Section 
            bgColor="bg-primary"
            id={idSection} 
        >
            <Container>
                <SliderGallery mediaList={mediaList} />
            </Container>
        </Section>
    )
}

export default SliderGallerySection;
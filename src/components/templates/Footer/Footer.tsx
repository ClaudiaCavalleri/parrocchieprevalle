import type { FC } from "react";
import type { TextRowProps } from "../../molecules/TextRow/TextRow";
import type { ContentProps } from "../../molecules/Content/Content";

import Content from "../../molecules/Content/Content";
import Container from "../../atoms/Container/Container";
import TextList from "../../cells/TextList/TextList";
import Image, { ImageProps } from "../../atoms/Image/Image";

interface FooterProps {
    content?: ContentProps;
    contentList?: TextRowProps[];
    mediaProps?: ImageProps;
}

const Footer: FC<FooterProps> = ({
    content,
    contentList = [],
    mediaProps,
}) => {
    const hasContentList: boolean = Array.isArray(contentList) && contentList.length > 0;

    return (
        <footer className="bg-primary-dark">
            <Container>
                <div className='footer-grid'>
                    <div className="footer-title">
                        <Image
                            pictureClassName={[
                                'media',
                            ].join(' ')}
                            {...mediaProps}
                        />
                        <Content
                            {...content}
                        />
                    </div>
                    <hr/>
                    {hasContentList && 
                        <TextList
                            list={contentList}
                        />
                    }
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
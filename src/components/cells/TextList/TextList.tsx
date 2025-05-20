import type { DOMAttributes, FC } from 'react';
import type { TextRowProps } from 'src/components/molecules/TextRow/TextRow';

import TextRow from '../../molecules/TextRow/TextRow';

export interface TextListProps extends DOMAttributes<HTMLOrSVGElement> {
    list?: TextRowProps[];
}

const TextList: FC<TextListProps> = ({
    list = [],
}) => {

    return (
        <div className='text-list-wrapper'>
            {list.map((item, index) => (
                <TextRow
                    key={index}
                    subtitle={item.subtitle}
                    text={item.text}
                    subtitleProps={item.subtitleProps}
                    textProps={item.textProps}
                />
            ))}
        </div>
    )
}

export default TextList;
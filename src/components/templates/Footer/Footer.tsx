import type { FC } from "react";
import Container from "../../atoms/Container/Container";

interface FooterProps {
}

const Footer: FC<FooterProps> = ({
}) => {

    return (
        <footer className="bg-primary-dark">
            <Container>
                FOOTER
            </Container>
        </footer>
    )
}

export default Footer;
import type { FC } from "react";
import Container from "../../atoms/Container/Container";

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({
}) => {

    return (
        <header className="bg-primary-dark">
            <Container>
                Header
            </Container>
        </header>
    )
}

export default Header;
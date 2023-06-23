import { Container } from './styles';

export function Star({ icon: Icon }) {
    return (
        <Container>
            {Icon && <Icon size={12} />}
        </Container>
    )
};
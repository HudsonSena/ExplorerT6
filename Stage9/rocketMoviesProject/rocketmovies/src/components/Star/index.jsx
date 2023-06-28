import { Container } from './styles';

export function Star({ icon: Icon, ...rest }){
    return(
        <Container {...rest}>
            {Icon && <Icon size={12} />}
        </Container>
    )
};
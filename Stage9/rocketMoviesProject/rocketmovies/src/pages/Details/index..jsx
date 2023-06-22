import { Container} from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

export function Details() {
    return (
        <Container>
            <Header />
            
            <Section title="Filme tal"/>
            
            <Button 
                title="Voltar"
            />
            
        </Container>
    )
}
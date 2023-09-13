import  { Container, Content }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Home() {
    return(
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
                <div>
                    <div>
                        <h2>Refeições</h2>
                        <div></div>
                    </div>
                    <div>
                        <h2>Sobremesas</h2>
                        <div></div>
                    </div>
                    <div>
                        <h2>Bebidas</h2>
                        <div></div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    )
}
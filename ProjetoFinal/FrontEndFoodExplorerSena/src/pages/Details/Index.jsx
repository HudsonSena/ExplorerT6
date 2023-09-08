import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

export function Details() {
  return(
    <Container>
      <Header />
      <Content>
        <a href="#">voltar</a>
        <div>
          <img src="" alt="" />
          <div>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <ul>
              <li>alface</li>
              <li>cebola</li>
              <li>pão naan</li>
              <li>pepino</li>
              <li>rabanete</li>
              <li>tomate</li>
            </ul>
            <Button title="Editar prato"></Button>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  )
};
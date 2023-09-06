import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer} from '../../components/Footer';

export function Details() {
  return(
    <Container>
      <Header />
      <Content>
        <h1>Content</h1>
      </Content>
      <Footer />
    </Container>
  )
};
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DetailsFood } from '../../components/DetailsFood';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

export function Details({ data, ...rest }) {
  return(
    <Container>
      <Header />
      <Content {...rest}>
        <Link><IoIosArrowBack />voltar</Link>

        <DetailsFood
          data={
            {
              title: 'Cuscuz Gourmet',
              description: 'Um Cuscuz da hora, com muito queijo e calabresa, quem sabe algo mais...',
              tags: [
                {id:'1', name:"cuscuz"},
                {id:'2', name:"queijo"},
                {id:'3', name:"calabresa"},
                {id:'4', name:"tomate"}
              ] 
            }
          }
        />
      </Content>
      <Footer />
    </Container>
  )
};
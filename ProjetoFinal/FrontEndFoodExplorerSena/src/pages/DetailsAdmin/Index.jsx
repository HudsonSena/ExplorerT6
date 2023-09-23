import { Container, Content } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { DetailsFoodAdmin } from '../../components/DetailsFoodAdmin';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

export function DetailsAdmin({ data, ...rest }) {
  return(
    <Container>
      <HeaderAdmin />
      <Content {...rest}>
        <Link><IoIosArrowBack />voltar</Link>
        <DetailsFoodAdmin
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
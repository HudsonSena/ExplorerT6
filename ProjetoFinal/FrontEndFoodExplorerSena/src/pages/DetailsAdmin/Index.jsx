import { Container, Content } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { DetailsFoodAdmin } from '../../components/DetailsFoodAdmin';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import imageFood from '../../assets/Mask group-2.png';

export function DetailsAdmin({ data, ...rest }) {
  return(
    <Container>
      <HeaderAdmin />
      <Content {...rest}>
        <Link to={-1}><IoIosArrowBack />voltar</Link>
        <DetailsFoodAdmin
          data={
            {
              image: imageFood,
              title: 'Cuscuz Gourmet',
              description: 'Um Cuscuz da hora, com muito queijo e calabresa, quem sabe algo mais...',
              cost: 2.99,
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
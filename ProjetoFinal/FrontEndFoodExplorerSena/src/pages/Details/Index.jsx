import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DetailsFood } from '../../components/DetailsFood';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import imageFood from '../../assets/Mask group-2.png';

export function Details({ data, ...rest }) {
  return(
    <Container>
      <Header />
      <Content {...rest}>
        <Link to="/home"><IoIosArrowBack />voltar</Link>

        <DetailsFood
          data={
            { 
              image: imageFood,
              title: 'Cuscuz Gourmet',
              description: 'Um Cuscuz da hora, com muito queijo e calabresa, quem sabe algo mais...',
              cost: 91,
              tags: [
                {id:'1', name:"cuscuz"},
                {id:'2', name:"queijo"},
                {id:'3', name:"calabresa"},
                {id:'4', name:"tomate"},
                {id:'5', name:"tomate"},
                {id:'6', name:"tomate"},
                {id:'7', name:"tomate"},
                {id:'8', name:"tomate"}
              ] 
            }
          }
        />
      </Content>
      <Footer />
    </Container>
  )
};
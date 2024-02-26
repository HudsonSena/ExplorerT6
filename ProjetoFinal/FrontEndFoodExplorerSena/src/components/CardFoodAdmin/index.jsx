import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';

export function CardFoodAdmin({ data, ...rest }) {
    return(
        <Container>
            <ButtonText icon={PiPencilSimpleBold} className='btnEdit' to="/createfood"/>
            <img src={data.image} className='imgFood'/>
            <ButtonText value={data.title} className='btnDetails' to="/detailsadmin" />
            <p>{data.description}</p>
            <span>R${data.cost}</span>
        </Container>
    )
}
import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';

export function CardFoodAdmin({ data, ...rest }) {
    return (
        <Container {...rest}>
            <ButtonText icon={PiPencilSimpleBold} className='btnEdit' to="/updatefood" />
            <img src={data.foodimage} className='imgFood' />
            <ButtonText value={data.title} className='btnDetails' to="/detailsadmin" />
            <p>{data.description}</p>
            <span>R${data.cost}</span>
        </Container>
    )
}
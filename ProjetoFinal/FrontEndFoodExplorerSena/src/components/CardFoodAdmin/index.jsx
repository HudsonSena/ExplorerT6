import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';
import imgFood from '../../assets/Mask group.png'

export function CardFoodAdmin({ data, ...rest }) {
    return(
        <Container>
            <ButtonText icon={PiPencilSimpleBold}/>
            <img src={data.image} className='imgFood'/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <span>R${data.cost}</span>
        </Container>
    )
}
import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';

export function CardFoodAdmin() {
    return(
        <Container>
            <ButtonText icon={PiPencilSimpleBold}/>
            <img src={data.avatar} alt={data.title} className='imgFood'/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <span>R${cost}</span>
        </Container>
    )
}
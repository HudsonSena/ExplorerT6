import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';
import imgFood2 from '../../assets/Mask group-2.png';

export function CardFoodAdmin() {
    return(
        <Container>
            <ButtonText icon={PiPencilSimpleBold}/>
            <img src={imgFood2} alt="" className='imgFood'/>
            <h3>Spaguetti Gambe</h3>
            <p>Massa fresca com camarões e pesto</p>
            <span>R$ 79,97</span>
        </Container>
    )
}
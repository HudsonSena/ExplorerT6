import { Container } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import imgFood2 from '../../assets/Mask group-2.png';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';

export function CardFood() {
    return(
        <Container>
            <ButtonText icon={BiHeart} className='buttonText'/>

            <img src={imgFood2} alt="" className='imgFood'/>
            <h3>Spaguetti Gambe</h3>
            <p>Massa fresca com camarões e pesto</p>
            <span>R$ 79,97</span>
            <div>
                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                <Button title="Incluir" className='buttonIncluir'/>
            </div>
        </Container>
    )
}
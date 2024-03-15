import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { api } from '../../services/api';

export function CardFoodAdmin({ data, ...rest }) {
    const foodimageUrl = food.imagefood ? `${api.defaults.baseURL}/file/${food.foodimage}` : null;
    return(
        <Container>
            <ButtonText icon={PiPencilSimpleBold} className='btnEdit' to="/updatefood"/>
            <img src={foodimageUrl} className='imgFood'/>
            <ButtonText value={data.title} className='btnDetails' to="/detailsadmin" />
            <p>{data.description}</p>
            <span>R${data.cost}</span>
        </Container>
    )
}
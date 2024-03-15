import { Container } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GoHeartFill } from 'react-icons/go';
import { useState } from 'react';
import { api } from '../../services/api';

export function CardFood({ data, ...rest }) {
    let [count, setCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false); // Novo estado para marcar o card como favorito

    if (count < 0) {
        count = 0
    }

    const foodimageUrl = food.imagefood ? `${api.defaults.baseURL}/file/${food.foodimage}` : null;

    return (
        <Container {...rest} to="/details">
            <ButtonText
            icon={GoHeartFill}
            className='btnfavority'
            onClick={() => setIsFavorite(!isFavorite)} // Toggle para marcar/desmarcar como favorito
            style={{ color: isFavorite ? 'red' : 'white' }} // Altera a cor do ícone com base no estado de favorito
            />

            <img src={foodimageUrl} className='imgFood' />
            <ButtonText value={data.title} className='btnDetails' to="/details"/>
            <p>{data.description}</p>
            <span>R${data.cost}</span>
            <div>
                <ButtonText
                    icon={AiOutlineMinus}
                    onClick={() => setCount(count - 1)}
                />

                <h4>{count}</h4>

                <ButtonText
                    icon={AiOutlinePlus}
                    onClick={() => setCount(count + 1)}
                />
                <Button title='Incluir' className='buttonIncluir' />
            </div>
        </Container>
    );
}

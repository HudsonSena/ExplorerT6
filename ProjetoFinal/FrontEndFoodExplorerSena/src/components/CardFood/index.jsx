import { Container } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GoHeartFill } from 'react-icons/go';
import { useState } from 'react';

export function CardFood({ data, ...rest }) {
  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false); // Novo estado para marcar o card como favorito

  if (count < 0) {
    count = 0;
  }

  return (
    <Container {...rest}>
      <ButtonText
        icon={GoHeartFill}
        className='buttonText'
        onClick={() => setIsFavorite(!isFavorite)} // Toggle para marcar/desmarcar como favorito
        style={{ color: isFavorite ? 'red' : 'white' }} // Altera a cor do ícone com base no estado de favorito
      />

      <img src={data.image} className='imgFood' />
      <h3>{data.title}</h3>
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

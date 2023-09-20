import { Container } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { useState } from 'react';
import imgFood from '../../assets/Mask group.png'

export function CardFood({ data, ...rest }) {
    let [count, setCount] = useState(0);

    if(count < 0) {
        count = 0;
    }

    return(
        <Container {...rest}>
            <ButtonText icon={BiHeart} className='buttonText'/>

            <img src={imgFood} className='imgFood'/>
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
                <Button title="Incluir" className='buttonIncluir'/>
            </div>
        </Container>
    )
}
import { Container } from "./styles";
import { Tag } from '../Tag';
import { Button } from '../Button';
import { ButtonText } from  '../../components/ButtonText';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import { PiNewspaperClipping } from 'react-icons/pi';
import { api } from '../../services/api';
import foodPlaceholder from '../../assets/foodimage_placeholder.svg';

export function DetailsFood({data, ...rest}) {
    let [count, setCount] = useState(1);

    const foodimageUrl = foodPlaceholder;

    if(count < 1) {
        count = 1;
    }

    const formatValue = (value) => {
        return value < 10 ? `0${value}` : value;}

    return(
        <Container { ...rest }>
            <img src={foodimageUrl} alt="" />
            <div className='infoFood'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {
                    data.tags &&

                    <section className='tagsline'>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </section>
                }

                <div>
                    <div>
                        <ButtonText
                        icon={AiOutlineMinus}
                        onClick={() => setCount(count - 1)}
                        />

                        <h3>{formatValue(count)}
                        </h3>

                        <ButtonText
                            icon={AiOutlinePlus}
                            onClick={() => setCount(count + 1)}
                        />
                    </div>
                    <Button icon={PiNewspaperClipping} title={"Incluir - R$ " + (formatValue(data.cost)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className='incluir'/>
                </div>
            </div>
        </Container>
    )
}
import { Container } from "./styles";
import imageFood from '../../assets/Mask group-2.png';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { ButtonText } from  '../../components/ButtonText';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

export function DetailsFood({data, ...rest}) {
    let [count, setCount] = useState(0);

    if(count < 0) {
        count = 0;
    }
    return(
        <Container { ...rest }>
            <img src={imageFood} alt="" />
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

                        <h3>{count}</h3>

                        <ButtonText
                            icon={AiOutlinePlus}
                            onClick={() => setCount(count + 1)}
                        />
                    </div>
                    <Button title="Incluir : 25,00"/>
                </div>
            </div>
        </Container>
    )
}
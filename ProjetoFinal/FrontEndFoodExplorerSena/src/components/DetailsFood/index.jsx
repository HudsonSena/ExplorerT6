import { Container } from "./styles";
import imageFood from '../../assets/Mask group-2.png';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export function DetailsFood({data, ...rest}) {
    return(
        <Container { ...rest }>
            <img src={imageFood} alt="" />
            <div className='order'>
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
                </div>
                <div>
                    <Button title="Incluir : 25,00" className="user"/>
                </div>            
            </div>
        </Container>
    )
}
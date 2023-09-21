import { Container } from "./styles";
import imageFood from '../../assets/Mask group-2.png';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

export function DetailsFoodAdmin({data, ...rest}) {
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
                    <Button title="Editar prato"/>
                </div>            
            </div>
        </Container>
    )
}
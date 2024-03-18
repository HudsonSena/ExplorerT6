import { Container } from "./styles";
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import foodPlaceholder from '../../assets/foodimage_placeholder.svg';

export function DetailsFoodAdmin({data, ...rest}) {
    const formatValue = (value) => {
        return value < 10 ? `0${value}` : value;}
    
        const foodimageUrl = foodPlaceholder;

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

                <div className="btnEditdiv">
                    <Button title={"Editar Prato - Valor: R$ " + (formatValue(data.cost)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} to="/updatefood" className='btnEdit'/>
                </div>
            </div>
            
        </Container>
    )
}
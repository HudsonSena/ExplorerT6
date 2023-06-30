import { Container } from './styles';
import { Tag } from '../Tags';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';

export function MoviePreviewComp({ data, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h1>{data.title}</h1>
                <div className='stars'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>

            </div>

            <p>
                <img src="http://github.com/HudsonSena.png" alt="" />
                 Por Hudson Sena 
                 <AiOutlineClockCircle /> 30/06/2023 às 17:00
            </p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} />
                        )
                    }
                </footer>
            }

            <p>{data.description}</p>
            
        </Container>
    )
}
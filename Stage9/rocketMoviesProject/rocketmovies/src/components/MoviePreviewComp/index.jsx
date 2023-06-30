import { Container } from './styles';
import { Tag } from '../Tags';
import { Star } from '../Star';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';

export function MoviePreviewComp({ data, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h2>{data.title}</h2>

                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiOutlineStar} />
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
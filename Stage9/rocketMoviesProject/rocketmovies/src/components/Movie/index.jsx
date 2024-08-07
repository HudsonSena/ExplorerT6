import { Container } from './styles';
import { Tag } from '../Tags';
import { Star } from '../../components/Star';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Movie({ data, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>

            <div className='stars'>
                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiFillStar} />
                <Star icon={AiOutlineStar} />
            </div>

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} />
                        )
                    }
                </footer>
            }
        </Container>
    )
}
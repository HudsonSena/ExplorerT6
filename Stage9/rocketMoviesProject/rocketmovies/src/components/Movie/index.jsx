import { Container } from './styles';
import { Tag } from '../Tags';
import { Star} from '../Star';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Movie({ data, icon: Icon, ...rest }) {
    /*const rate5 = `
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
    `;
    const rate4 = `
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiOutlineStar} />
    `;
    const rate3 = `
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
    `;
    const rate2 = `
        <Star icon={AiFillStar} />
        <Star icon={AiFillStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
    `;
    const rate1 = `
        <Star icon={AiFillStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
        <Star icon={AiOutlineStar} />
    `;

    if(data.rate == 5){
        new data.rate = rate5
    } if (data.rate == 4){
        new data.rate = rate4
    } if (data.rate == 3){
        new data.rate = rate3
    } if (data.rate == 2){
        new data.rate = rate2
    } else {
        new data.rate = rate1
    }*/

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
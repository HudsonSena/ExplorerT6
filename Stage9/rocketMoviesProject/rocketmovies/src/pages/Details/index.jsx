import { Container, Content } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tags';
import { Star } from '../../components/Star';
import { AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';

export function Details() {
    return (
        <Container>
            <Header />           
            
            <main>
                <div className='h1button'>
                    <h1>Meus Filmes</h1>
                    <Button
                        icon={AiOutlinePlus}
                        title="Adicionar Filmes"
                        />
                </div>

                <Content>
                    <Section title="Star Wars">
                        <div className='stars'>
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiOutlineStar} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem eveniet excepturi voluptatum ullam perspiciatis adipisci blanditiis suscipit, obcaecati nisi. Ullam repellendus ut vero harum impedit nam excepturi, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio! Quae unde id nemo ut, nobis exercitationem modi! Alias expedita aliquam officiis sint porro, laudantium repellat architecto facere vitae. Eius!</p>
                        <div className='tags'>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Tecnologia"/>
                            <Tag title="Ação"/>
                        </div>
                    </Section>

                    <Section title="Star Wars">
                        <div className='stars'>
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiOutlineStar} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem eveniet excepturi voluptatum ullam perspiciatis adipisci blanditiis suscipit, obcaecati nisi. Ullam repellendus ut vero harum impedit nam excepturi, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio! Quae unde id nemo ut, nobis exercitationem modi! Alias expedita aliquam officiis sint porro, laudantium repellat architecto facere vitae. Eius!</p>
                        <div className='tags'>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Tecnologia"/>
                            <Tag title="Ação"/>
                        </div>
                    </Section>

                    <Section title="Star Wars">
                        <div className='stars'>
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiOutlineStar} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem eveniet excepturi voluptatum ullam perspiciatis adipisci blanditiis suscipit, obcaecati nisi. Ullam repellendus ut vero harum impedit nam excepturi, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio! Quae unde id nemo ut, nobis exercitationem modi! Alias expedita aliquam officiis sint porro, laudantium repellat architecto facere vitae. Eius!</p>
                        <div className='tags'>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Tecnologia"/>
                            <Tag title="Ação"/>
                        </div>
                    </Section>

                    <Section title="Star Wars">
                        <div className='stars'>
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiFillStar} />
                            <Star icon={AiOutlineStar} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem eveniet excepturi voluptatum ullam perspiciatis adipisci blanditiis suscipit, obcaecati nisi. Ullam repellendus ut vero harum impedit nam excepturi, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio! Quae unde id nemo ut, nobis exercitationem modi! Alias expedita aliquam officiis sint porro, laudantium repellat architecto facere vitae. Eius!</p>
                        <div className='tags'>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Tecnologia"/>
                            <Tag title="Ação"/>
                        </div>
                    </Section>
                </Content>
            </main>
            
        </Container>
    )
}
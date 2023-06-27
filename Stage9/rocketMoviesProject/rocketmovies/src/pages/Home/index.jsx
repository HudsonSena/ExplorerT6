import { Container, Content } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie/index.jsx';
import { Tag } from '../../components/Tags';
import { AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <div className='h1button'>
                    <h1>Meus Filmes</h1>
                    <Button
                        icon={AiOutlinePlus}
                        title="Adicionar Filmes"
                        />
                </div>
                
                <main>
                    <Movie data={{
                        title: 'Star Wars 1000',

                        description: 'Muita coisa vai ser escrita aqui, até achar o que escrever',

                        tags: [
                            { id: '1', name: 'tag01'},
                            { id: '2', name: 'tag03'},
                            { id: '3', name: 'tag04'},
                        ]
                    }} 
                    />
                </main>
            </Content>
            
        </Container>
    )
}
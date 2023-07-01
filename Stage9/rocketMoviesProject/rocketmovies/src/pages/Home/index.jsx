import { Container, Content } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { AiOutlinePlus } from 'react-icons/ai';

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
                        to="/createmovie"
                        />
                </div>
                              
                <main>
                    <Movie data={{
                        title: 'Star Wars 1000',

                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni, porro sapiente est esse deserunt consectetur sit neque laboriosam repellat vel! Praesentium recusandae incidunt, cum debitis pariatur tenetur suscipit laborum!',

                        tags: [
                            { id: '1', name: 'Ficçõa Científica'},
                            { id: '2', name: 'Ação'},
                            { id: '3', name: 'Drama'},
                        ]
                    }} 
                    />
                </main>
            </Content>
            
        </Container>
    )
}
import { Container, Content } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft } from "react-icons/fi";
import { MoviePreviewComp } from '../../components/MoviePreviewComp';

export function MoviePreview() {
    return(
        <Container>
            <Header />
            <Content>
                <ButtonText
                    title="Voltar"
                    icon={FiArrowLeft}
                />
                <main>
                    <MoviePreviewComp data={{
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
};
import { Container, Content, Form } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { FiArrowLeft } from "react-icons/fi";
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieItem } from "../../components/MovieItem";

export function CreateMovie() {
    return(
        <Container>
            <Header />
            <Content>
                <ButtonText
                    className="btnback"
                    title="Voltar"
                    icon={FiArrowLeft}
                    to="/"
                />

                <main>
                    <Form>
                        <h1>Novo Filme</h1>
                        <div>
                            <Input
                                placeholder="Título"
                                type="text"
                            />
                            <Input
                                placeholder="Sua nota(de 0 a 5)"
                                type="number"
                            />
                        </div>
                        <TextArea
                            placeholder="Observações"
                            type="textarea"
                        />
                        <h2>Marcadores</h2>
                        <div className="marcadores">
                            <MovieItem value="Ficção científica"/>
                            <MovieItem value="Ação"/>
                            <MovieItem value="Drama"/>
                            <MovieItem  isNew placeholder="Novo marcador"/>
                        </div>
                        <div className="buttons">
                            <Button className="deletefilme" title="Excluir filme"/>
                            <Button title="Salvar alterações"/>
                        </div>
                    </Form>
                </main>
            </Content>
        </Container>
    )
};
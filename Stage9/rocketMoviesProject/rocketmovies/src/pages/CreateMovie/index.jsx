import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft } from "react-icons/fi";
import { Input } from '../../components/Input';
import { InputArea } from '../../components/InputArea';

export function CreateMovie() {
    return(
        <Container>
            <Header />
            <main>
                <ButtonText 
                    title="Voltar"
                    icon={FiArrowLeft}
                />

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
                    <InputArea
                        placeholder="Observações"
                        type="textarea" 
                    />

                    <h2>Marcadores</h2>
                </Form>
            </main>
        </Container>
    )
};
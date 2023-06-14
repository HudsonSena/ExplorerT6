import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Noteitem } from '../../components/Noteitem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


import { Container, Form } from './styles';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título"/>

                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <Noteitem value="https://rocketseat.com.br"/>
                        <Noteitem placeholder="Novo link" isNew />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <Noteitem value="React"/>
                            <Noteitem placeholder="Nova tag" isNew />
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}
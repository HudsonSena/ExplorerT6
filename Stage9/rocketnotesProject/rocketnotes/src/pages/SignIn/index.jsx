import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input
                    placehoulder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placehoulder="E-mail"
                    type="text"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">Criar Conta</a>
            </Form>

        </Container>        
    );
}
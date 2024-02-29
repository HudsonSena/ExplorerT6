import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <Container>
            <div>
                <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                </svg>
                <h1>food explorer</h1>
            </div>
            <Form>
                <h2>Crie sua conta</h2>

                <div>
                    <label htmlFor="inputName">Nome</label>
                    <Input
                        id="inputName"
                        placeholder="Exemplo: Maria da Silva"
                        size="40"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputMail">Email</label>
                    <Input
                        id="inputMail" 
                        placeholder="Exemplo: exemplo@exemplo.com.br" size="40"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputPassword">Senha</label>
                    <Input 
                        id="inputPassword" 
                        placeholder="No mínimo 6 caracteres" 
                        size="40"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button title="Cria conta"/>

                <Link to="/">Ja tenho uma conta</Link>
            </Form>
        </Container>
    )
}
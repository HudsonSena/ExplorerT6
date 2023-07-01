import { Container, Form, Background } from './styles';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';

export function SignIn() {
    return(
        <Container>
            <section>
                <Form>
                    <div>
                        <h1>RocketMovies</h1>
                        <p>Aplicação para acompanhar tudo que assistir.</p>
                    </div>
                
                    <h2>Faça seu login</h2>
                    <div>
                        <Input
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}/>
                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock} />
                
                        <Button title="Entrar"/>
                    </div>
                    <ButtonText title="Criar conta" to="/register"/>
                </Form>
            </section>

            <Background></Background>

        </Container>
    )
};
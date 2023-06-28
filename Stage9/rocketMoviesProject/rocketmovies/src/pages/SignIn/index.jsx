import { Container, Form } from './styles';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';

export function SingIn() {
    return(
        <Container>
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
                        type="text"
                        icon={FiLock} />
                </div>

                <Button title="Entrar"/>

                <ButtonText title="Criar conta"/>
            </Form>

        </Container>
    )
};
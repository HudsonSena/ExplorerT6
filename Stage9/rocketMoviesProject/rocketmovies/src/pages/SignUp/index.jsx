import { Container, Form, Background } from './styles';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';

export function SignUp() {
    return(
        <Container>
            <section>
                <Form>
                    <div>
                        <h1>RocketMovies</h1>
                        <p>Aplicação para acompanhar tudo que assistir.</p>
                    </div>
                
                    <h2>Crie sua conta</h2>
                    <div>
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser} />

                        <Input
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}/>

                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock} />
                
                        <Button title="Cadastrar"/>
                    </div>
                    <ButtonText 
                        title="Voltar para o login"
                        icon={FiArrowLeft}/>
                </Form>
            </section>

            <Background></Background>

        </Container>
    )
};
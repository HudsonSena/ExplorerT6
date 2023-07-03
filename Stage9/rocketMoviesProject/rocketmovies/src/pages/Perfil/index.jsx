import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Perfil() {
    return(
        <Container>
            <header>
                <ButtonText
                    className="btnback"
                    to="/"
                    title="Voltar"
                    icon={FiArrowLeft}
                />
            </header>
            <Form>
                <Avatar>
                    <img
                        src="https://github.com/HudsonSena.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <div>
                    <Input
                        placeholder="Hudson Diego"
                        type="text"
                        icon={FiUser}
                        />
                    <Input
                        placeholder="hudsonsena93@gmail.com"
                        type="text"
                        icon={FiMail}
                        />
                </div>
                <div>
                    <Input
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                        />
                    <Input
                        placeholder="Nova senha"
                        type="password"
                        icon={FiUser}
                        />
                </div>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
};
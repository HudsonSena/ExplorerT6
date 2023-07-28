import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from './styles';

export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/HudsonSena.png" 
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Hudson Sena</strong>
                </div>
            </Profile>

            <Logout onClick={signOut} to="/">
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}
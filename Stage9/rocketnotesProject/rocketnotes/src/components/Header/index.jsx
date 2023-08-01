import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from './styles';
import { api } from "../../../../../../api/src/services/api";

export function Header() {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} 
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo(a),</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut} to="/">
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}
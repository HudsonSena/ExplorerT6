import { Container, Profile } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input 
                placeholder="Pesquisar pelo título"
                type="text"/>

            <Profile>
                <div>                    
                    <Link className='btnperfil' to="/perfil" >Hudson Sena</Link>
                    <Link>sair</Link>
                </div>

                <img 
                    src="http://github.com/HudsonSena.png" 
                    alt="Imagem do usuário"
                />               
            </Profile>
        </Container>
    )
}
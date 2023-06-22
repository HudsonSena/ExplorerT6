import { Container, Profile } from './styles';
import { Input } from '../../components/Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input 
                placeholder="Pesquisar pelo título"
                type="text"/>

            <Profile>
                <div>                    
                    <strong>Hudson Sena</strong>
                    <a href="#">sair</a>
                </div>

                <img 
                    src="http://github.com/HudsonSena.png" 
                    alt="Imagem do usuário"
                />               
            </Profile>
        </Container>
    )
}
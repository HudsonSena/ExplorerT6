import { Container } from './styles';
import { Button } from '../Button';
import { FiLogOut } from 'react-icons/fi';
import { Input } from '../Input';
import { logo } from '../../assets/logo.svg';

export function Header() {
    return(
        <Container>
            <div>
                <img src={logo} alt="" />
                <h1>food Explorer</h1>
            </div>
            
            <Input placeholder="Busque por pedidos"/>
            <Button title="Pedidos"></Button>
            <a href=""><FiLogOut /></a>
        </Container>
    )
}
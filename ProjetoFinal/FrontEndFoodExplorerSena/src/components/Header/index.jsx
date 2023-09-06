import { Container } from './styles';
import { Button } from '../Button';
import { FiLogOut } from 'react-icons/fi';
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <Container>
            <h1>Food Explorer</h1>
            <Input placeholder="Busque por pedidos"/>
            <Button title="Pedidos"></Button>
            <a href=""><FiLogOut /></a>
        </Container>
    )
}
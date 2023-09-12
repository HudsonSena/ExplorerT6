import { Container } from './styles';
import { Button } from '../Button';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { Input } from '../Input';
import { ButtonText } from '../ButtonText';

export function Header() {
    return(
        <Container>
            <div>
                <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                </svg>
                <div>
                    <h1>food explorer</h1>
                    <span className='admin'>admin</span>
                </div>
            </div>
            
            <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} type="text"/>
            <Button title="Pedidos"></Button>
            <ButtonText icon={FiLogOut} size={50}/>
        </Container>
    )
}
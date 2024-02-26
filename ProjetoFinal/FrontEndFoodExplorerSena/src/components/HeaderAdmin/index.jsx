import { Container } from './styles';
import { Button } from '../Button';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function HeaderAdmin() {

    function clickMenu() {
        svgmenu.style.display = 'none';
        foodexplorer.style.display = 'none';
        menu.style.display = 'flex';
        menulist.style.display = 'flex';        
    }

    function clickMenuOutside() {
        svgmenu.style.display = 'flex';
        foodexplorer.style.display = 'flex';
        menu.style.display = 'none';
        menulist.style.display = 'none';
    }

    return(
        <Container>
            <div className='menuclassic'>
                <div className='foodexplorer'>
                    <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                    </svg>
                    <div>
                        <h1>food explorer</h1>
                        <span className='admin'>admin</span>
                    </div>
                </div>
                
                <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} type="text"/>
                
                <Button title="Novo prato" to="/createfood" className="newFood"></Button>
                <Link to="/"><FiLogOut /></Link>
            </div>
            <div id='btnmenu' className='btnmenu'>
                <Link id='svgmenu' className='svgmenu' onClick={clickMenu}><AiOutlineMenu /></Link>
                <Link id='menu' className='menu' onClick={clickMenuOutside}><AiOutlineClose />Menu</Link>
                <div  id='foodexplorer' className='foodexplorer'>
                    <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                    </svg>
                    <h1>food explorer</h1>
                    <span className='admin'>admin</span>
                </div>
                <div id='menulist' className='menulist'>
                    <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} type="text"/>

                    <Link to="/createfood">Novo prato</Link>
                    <Link to="/">Sair</Link>
                </div>
            </div>
            
        </Container>
    )
}
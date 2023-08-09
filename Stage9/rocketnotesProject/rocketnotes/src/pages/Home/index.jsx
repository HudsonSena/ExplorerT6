import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText} from '../../components/ButtonText';

import { useState, useEffect } from 'react';

export function Home() {
    const [tags, setTags] = useState([]);
    
    useEffect(() => {},[])
    
    return(
            <Container>
                <Brand>
                    <h1>RocketNotes</h1>
                </Brand>

                <Header />

                <Menu>
                    <li>
                        <ButtonText title="Todos"/>
                    </li>
                    <li>
                        <ButtonText title="React"/>
                    </li>                    
                    <li>
                        <ButtonText title="Nodejs"/>
                    </li>
                </Menu>

                <Search>
                    <Input placeholder="Pesquisar pelo título" />
                </Search>

                <Content>
                    <Section title="Minha notas" >
                        <Note data={{
                            title: 'React',
                            tags: [
                                { id: '1', name: 'react'},
                                { id: '2', name: 'rocketseat'}
                            ]
                        }}
                        />
                    </Section>
                </Content>

                <NewNote to="/new">
                    <FiPlus />
                    Criar Notas
                </NewNote>
            </Container>
        )
}
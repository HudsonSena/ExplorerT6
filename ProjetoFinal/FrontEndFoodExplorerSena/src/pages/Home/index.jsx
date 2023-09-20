import  { Container, Content }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { ButtonText } from '../../components/ButtonText';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { CardFood } from '../../components/CardFood';
import React, { useRef } from 'react';

export function Home() {
    const sectionRef = useRef(null);
    let scrollInterval = null;

    const startScrollLeft = () => {
        scrollInterval = setInterval(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollLeft -= 50; // Ajuste a velocidade da rolagem aqui
        }
        }, 100); // Ajuste o intervalo da rolagem aqui
    };

    const startScrollRight = () => {
        scrollInterval = setInterval(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollLeft += 50; // Ajuste a velocidade da rolagem aqui
        }
        }, 100); // Ajuste o intervalo da rolagem aqui
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
    };

    return(
        <Container>
            <Header />
            <Content>                
                <div className='intro'>
                    <img src={imgHome} alt="" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>

                <h2>Refeições</h2>

                <section>
                    <div className='shadowleft'>
                        <ButtonText
                            icon={MdOutlineNavigateBefore}
                            onMouseDown={startScrollLeft} onMouseUp={stopScroll}                            
                        />
                    </div>
                    <div className='listFood' ref={sectionRef} >
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />

                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais sgafgfgfdgfgdf hhhhhhhhhhhhhhhhhhhhhhhhhh',
                                cost: '10,00'
                            }}
                        />
                    </div>
                    <div className='shadowright'>
                        <ButtonText 
                            icon={MdOutlineNavigateNext}
                            onMouseDown={startScrollRight} onMouseUp={stopScroll}
                        />
                    </div>                    
                </section>

                <h2>Sobremesas</h2>

                <section>
                    <div className='shadowleft'>
                        <ButtonText icon={MdOutlineNavigateBefore}/>
                    </div>
                    <div className='listFood'>
                    </div>
                    <div className='shadowright'>
                        <ButtonText icon={MdOutlineNavigateNext}/>
                    </div>                    
                </section>

                <h2>Bebidas</h2>

                <section>
                    <div className='shadowleft'>
                        <ButtonText icon={MdOutlineNavigateBefore}/>
                    </div>
                    <div className='listFood'>
                    </div>
                    <div className='shadowright'>
                        <ButtonText icon={MdOutlineNavigateNext}/>
                    </div>                    
                </section>
            </Content>
            <Footer />
        </Container>
    )
}
import  { Container, Content }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { CardFood } from '../../components/CardFood';
//import React, { useRef, useState } from 'react';
//import { Swiper, SwiperSlide } from 'swiper/react';

export function Home() {
    return(
        <Container>
            <Header />
            <Content>                
                <div className='intro'>
                    <img src={imgHome} alt="" />
                    <div className='infointro'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>

                <h2>Refeições</h2>

                <section>
                    <div className='listFood'>
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                        <CardFood 
                            data={{
                                title: 'Farofa',
                                description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                cost: '10,00'
                            }}
                        />
                    </div>                   
                </section>

                <h2>Sobremesas</h2>

                <section>
                    <div className='listFood'>
                    </div>                    
                </section>

                <h2>Bebidas</h2>

                <section>
                    <div className='listFood'>
                    </div>                    
                </section>
            </Content>
            <Footer />
        </Container>
    )
}
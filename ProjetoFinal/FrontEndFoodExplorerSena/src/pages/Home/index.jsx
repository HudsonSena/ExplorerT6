import  { Container, Content }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { CardFood } from '../../components/CardFood';
import imageFood from '../../assets/Mask group-2.png';
import { Navigation, A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

//import React, { useRef, useState } from 'react';

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
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={'1'}
                        slidesPerView= {'auto'}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,00'
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <h2>Sobremesas</h2>

                <section>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={'1'}
                        slidesPerView= {'auto'}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,00'
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <h2>Bebidas</h2>

                <section>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={'1'}
                        slidesPerView= {'auto'}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,00'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFood 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,00'
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>
            </Content>
            <Footer />
        </Container>
    )
}
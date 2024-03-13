import  { Container, Content }  from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { CardFoodAdmin } from '../../components/CardFoodAdmin';
import imageFood from '../../assets/Mask group-2.png';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export function HomeAdmin() {
    return(
        <Container>
            <HeaderAdmin />
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
                        className='wiperId'
                        modules={[Navigation, A11y, Pagination]}
                        breakpoints={{
                            1500: {
                                slidesPerView: 4
                            },

                            1300: {
                                slidesPerView: 3
                            },

                            1100: {
                                slidesPerView: 2.5
                            },

                            700: {
                              slidesPerView: 2
                            }
                        }}

                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,01'
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <h2>Sobremesas</h2>

                <section>
                    <Swiper
                        className='wiperId'
                        modules={[Navigation, A11y, Pagination]}
                        breakpoints={{
                            1500: {
                                slidesPerView: 4
                            },

                            1300: {
                                slidesPerView: 3
                            },

                            1100: {
                                slidesPerView: 2.5
                            },

                            700: {
                              slidesPerView: 2
                            }
                        }}

                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                        >
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,01'
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <h2>Bebidas</h2>

                <section>
                    <Swiper
                        className='wiperId'
                        modules={[Navigation, A11y, Pagination]}
                        breakpoints={{
                            1500: {
                                slidesPerView: 4
                            },

                            1300: {
                                slidesPerView: 3
                            },

                            1100: {
                                slidesPerView: 2.5
                            },

                            700: {
                              slidesPerView: 2
                            }
                        }}

                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                        >
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '11,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '12,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '13,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '14,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '15,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '16,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '17,01'
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardFoodAdmin 
                                data={{
                                    image: imageFood,
                                    title: 'Farofa',
                                    description: 'Uma farofa da hora, com muita carne e farinha, quem sabe algo mais',
                                    cost: '18,01'
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
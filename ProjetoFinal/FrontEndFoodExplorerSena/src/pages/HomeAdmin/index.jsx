import { Container, Content } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { CardFoodAdmin } from '../../components/CardFoodAdmin';
//import imageFood from '../../assets/Mask group-2.png';
//import { Navigation, A11y, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function HomeAdmin() {
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFoods() {
            const response = await api.get(`/foods?title=${search}&tags=${search}`)
            setFoods(response.data);
        }
        fetchFoods();
    }, [search]);

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    return (
        <Container>
            <HeaderAdmin
                onChange={(e) => setSearch(e.target.value)} />
            <Content>
                <div className='intro'>
                    <img src={imgHome} alt="" />
                    <div className='infointro'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>

                <h2>Testando</h2>

                <section>
                    {
                        foods.map(food => (
                            <CardFoodAdmin
                                key={String(food.id)}
                                data={food}
                            />
                        ))

                    }
                </section>

                <h2>Refeições</h2>

                <section>

                </section>

                <h2>Sobremesas</h2>

                <section>

                </section>

                <h2>Bebidas</h2>

                <section>

                </section>
            </Content>
            <Footer />
        </Container>
    )
}
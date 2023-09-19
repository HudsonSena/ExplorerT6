import  { Container, Content }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { ButtonText } from '../../components/ButtonText';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { CardFood } from '../../components/CardFood';

export function Home() {
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
                        <ButtonText icon={MdOutlineNavigateBefore}/>
                    </div>
                    <div className='listFood'>
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                    </div>
                    <div className='shadowright'>
                        <ButtonText icon={MdOutlineNavigateNext}/>
                    </div>                    
                </section>

                <h2>Sobremesas</h2>

                <section>
                    <div className='shadowleft'>
                        <ButtonText icon={MdOutlineNavigateBefore}/>
                    </div>
                    <div className='listFood'>
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
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
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
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
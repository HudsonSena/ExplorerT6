import  { Container, Content, Card }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import imgFood2 from '../../assets/Mask group-2.png';

export function Home() {
    return(
        <Container>
            <Header />
            <Content>
                <img src={imgHome} alt="" />
                <div className='intro'>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
                <div>
                    <h2>Refeições</h2>
                    <div className='listFood'>
                        <Card>
                            <img src={imgFood2} alt="" />
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>
                            <img src={imgFood2} alt="" />
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>
                            <img src={imgFood2} alt="" />
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>
                            <img src={imgFood2} alt="" />
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>
                            <img src={imgFood2} alt="" />
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    )
}
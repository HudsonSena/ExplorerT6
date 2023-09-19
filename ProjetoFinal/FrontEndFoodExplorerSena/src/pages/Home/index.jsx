import  { Container, Content, Card }  from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import imgHome from '../../assets/home.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import imgFood2 from '../../assets/Mask group-2.png';
import imgHeart from '../../assets/heart.svg';

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
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>                        
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
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>                        
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
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>
                        <Card>                            
                            <a href="">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <img src={imgFood2} alt="" className='imgFood'/>
                            <h3>Spaguetti Gambe</h3>
                            <p>Massa fresca com camarões e pesto</p>
                            <span>R$ 79,97</span>
                            <div>
                                <ButtonText icon={AiOutlineMinus}/><h4>01</h4><ButtonText icon={AiOutlinePlus}/>
                                <Button title="Incluir" className='buttonIncluir'/>
                            </div>
                        </Card>                        
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
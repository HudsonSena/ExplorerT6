import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import imageFood from '../../assets/Mask group.png';

export function Details() {
  return(
    <Container>
      <Header />
      <Content>
        <a href="#">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L2.41421 11L11.7071 20.2929C12.0976 20.6834 12.0976 21.3166 11.7071 21.7071C11.3166 22.0976 10.6834 22.0976 10.2929 21.7071L0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z" fill="white"/>
          </svg>
          voltar
        </a>
        <div className='details'>
          <img src={imageFood} alt="" />
          <div className='order'>
            <div className='infoFood'>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <section>
                <div className='tags'>alface</div>
                <div className='tags'>cebola</div>
                <div className='tags'>pão naan</div>
                <div className='tags'>pepino</div>
                <div className='tags'>rabanete</div>
                <div className='tags'>tomate</div>
              </section>
            </div>
            <div className='user'>
              <div>
                <ButtonText icon={AiOutlineMinus}/><h3>01</h3><ButtonText icon={AiOutlinePlus}/>
              </div>
              <Button title="Incluir : 25,00" className="user"/>
            </div>
            <div className='admin'>
              <Button title="Editar prato" className="admin"/>
            </div>
            
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  )
};
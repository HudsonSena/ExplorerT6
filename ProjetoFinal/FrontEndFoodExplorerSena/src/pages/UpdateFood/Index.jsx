import { useState } from 'react';
import { Container, Content, Form, Avatar } from './styles';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { FoodItem } from '../../components/FoodItem';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import foodPlaceholder from '../../assets/foodimage_placeholder.svg';

export function UpdateFood() {
  const { updateFood } = useAuth();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [newCost, setNewCost] = useState();
  const [newDescription, setNewDescription] = useState();

  const foodimageUrl = food.imagefood ? `${api.defaults.baseURL}/file/${food.foodimage}` : foodPlaceholder;
  const [foodimage, setFoodImg] = useState(foodimageUrl);
  const [foodimageFile, setFoodImageFile] = useState(null);

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  
  async function handleUpdateFood() {
    const food = {
      title,
      category,
      tags,
      cost: newCost,
      description: newDescription
    }
    
    await updateFood({ food, foodimageFile });
  };

  function handleChangeImgFood(event) {
    const file = event.target.file[0];
    setFoodImg(file);

    const imagePreView = URL.createObjectURL(file);
    setFoodImageFile(imagePreView);
          
  };

  return(
    <Container>
      <HeaderAdmin />
      <Content>
        <Link to={-1}><IoIosArrowBack />voltar</Link>

        <h1>Editar prato</h1>
        
        <Form>
          <div className="info01">
            <div>
              <label htmlFor="inputImg">Imagem do prato</label>
              <Avatar>
                <img src={foodimage}/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z" fill="white"/>
                </svg>
                <label htmlFor="inputImg">Selecione imagem</label>
                <input id="inputImg" type="file" onChange={handleChangeImgFood}/>
              </Avatar>
            </div>
            <div>
              <label htmlFor="inputName">Nome</label>
              <Input id="inputName" type="text" placeholder="Ex.: Salada Ceasar"/>
            </div>
            <div>
              <label htmlFor="inputCategory">Categoria</label>
              <Input id="inputCategory" type="search" list='category'/>
              <datalist id='category'>
                <option value="Refeições"/>
                <option value="Sobremesas"/>
                <option value="Bebidas"/>
              </datalist>
              
            </div>
          </div>
          <div className="info02">
            <div>
              <label htmlFor="inputIngred">Ingredientes</label>
              <div className='newTags'>
              {
                  tags.map((tag, index) => (
                    <FoodItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}                    
                  />
                  ))
                }
                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </div>
            <div className='sectioncost'>
              <label htmlFor="inputCost">Preço</label>
              <Input 
                id="inputCost" 
                type="number" 
                placeholder="R$ 00,00" 
                step="0.00" min="0.00" 
                max="10000.00"
                onChange={setNewCost}
              />
            </div>
          </div>
          <div className='info03'>
            <label htmlFor="inputDescription">Descrição</label>
            <Textarea 
              id="inputDescription" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              onChange={setNewDescription}
            />
          </div>
          <div className='deleteUpdate'>
            <Button title="Excluir prato" id="deleteFood"/>
            <Button title="Salvar Alterações" disabled={true} id="addFood" onClick={handleUpdateFood}/>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
};
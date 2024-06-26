import { useState, useEffect } from "react";
import { Container, Content, Form, Avatar } from "./styles";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { api } from "../../services/api";
import foodPlaceholder from "../../assets/foodimage_placeholder.svg";
import { FiUpload } from "react-icons/fi";

export function UpdateFood() {
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);

      if (response.data.foodimage) {
        setFoodImage(`${api.defaults.baseURL}/files/${response.data.foodimage}`);
      }
    }

    fetchNote();
  }, []);

  const [data, setData] = useState(null);
  const params = useParams();

  const [newCategory, setNewCategory] = useState("")
  const [newTag, setNewTag] = useState("");
  const [newCost, setNewCost] = useState("");
  const [newDescription, setNewDescription] = useState();
  const [foodImage, setFoodImage] = useState(foodPlaceholder);
  const [foodImageFile, setFoodImageFile] = useState(null);

  function handleChangeImgFood(event) {
    const file = event.target.files[0];
    setFoodImageFile(file);

    const imagePreView = URL.createObjectURL(file);
    setFoodImage(imagePreView);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleUpdateFood() {
    const food = {
      title,
      category: newCategory,
      tags: newTag,
      cost: newCost,
      description: newDescription,
    };

    await updateFood({ food, foodImageFile });
  }

  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <Link to={-1}>
          <IoIosArrowBack />
          voltar
        </Link>

        <h1>Editar prato</h1>

        {data && (
          <Form>
            <div className="info01">
              <div>
                <label htmlFor="inputImg">Imagem do prato</label>
                <section>
                  <img src={foodImage} />
                  <Avatar>
                    <FiUpload size={30} />
                    <label htmlFor="inputImg">Selecione imagem</label>
                    <input
                      id="inputImg"
                      type="file"
                      onChange={handleChangeImgFood}
                    />
                  </Avatar>
                </section>
              </div>
              <div>
                <label htmlFor="inputName">Nome</label>
                <Input
                  id="inputName"
                  type="text"
                  placeholder={data.title}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="inputCategory">Categoria</label>
                <Input id="inputCategory" type="search" list="category" placeholder={data.category} />
                <datalist id="category">
                  <option value="Refeições" />
                  <option value="Sobremesas" />
                  <option value="Bebidas" />
                </datalist>
              </div>
            </div>
            <div className="info02">
              <div>
                <label htmlFor="inputIngred">Ingredientes</label>
                <div className="newTags">
                  {data.tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}
                  <FoodItem
                    isNew
                    placeholder="Adicionar"
                    onChange={(e) => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
                </div>
              </div>
              <div className="sectioncost">
                <label htmlFor="inputCost">Preço</label>
                <Input
                  id="inputCost"
                  type="number"
                  placeholder={`R$ ${data.cost}`}
                  step="0.00"
                  min="0.00"
                  max="10000.00"
                  onChange={setNewCost}
                />
              </div>
            </div>
            <div className="info03">
              <label htmlFor="inputDescription">Descrição</label>
              <Textarea
                id="inputDescription"
                placeholder={data.description}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="deleteUpdate">
              <Button title="Excluir prato" id="deleteFood" />
              <Button
                title="Salvar Alterações"
                disabled={true}
                id="addFood"
                onClick={handleUpdateFood}
              />
            </div>
          </Form>
        )}
      </Content>
      <Footer />
    </Container>
  );
}

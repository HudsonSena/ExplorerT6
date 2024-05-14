import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { PiPencilSimpleBold } from "react-icons/pi";
import { api } from "../../services/api";
import imgPlaceholder from "../../assets/foodimage_placeholder.svg";

export function CardFoodAdmin({ data, ...rest }) {
  const imgURL = data.foodimage
    ? `${api.defaults.baseURL}/files/${data.foodimage}`
    : imgPlaceholder;

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  return (
    <Container {...rest}>
      <ButtonText
        icon={PiPencilSimpleBold}
        className="btnEdit"
        to="/updatefood"
      />
      <img src={imgURL} className="imgFood" />
      <ButtonText
        value={data.title}
        className="btnDetails"
        to="/detailsadmin"
      />
      <p>{data.description}</p>
      <span>
        R$
        {parseFloat(data.cost).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </Container>
  );
}

import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details(){

  return(
    <Container>
      <h1>Hello World</h1>
      <span> Hudson Diego</span>

      <Button title="Entrar" loading ></Button>
      <Button title="Cadastrar"></Button>
      <Button title="Voltar"></Button>
    </Container>
  )
}
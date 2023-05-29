import { Container, Links, Content } from "./styles";

import { Header} from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae illo odio vel harum quos vitae blanditiis rerum dignissimos dolorem ipsa, incidunt dicta enim doloribus! Fugiat aperiam a quibusdam facilis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati hic commodi ab pariatur repellendus totam, eligendi labore adipisci magni eum recusandae dolorem dolore itaque architecto quos esse distinctio a officiis?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="">https://www.rocketseat.com.br</a></li>
              <li><a href="">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
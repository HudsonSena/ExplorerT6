import { api } from '../../../../../../api/src/services/api';
import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles";
import { useParams } from "react-router-dom";
import { Header} from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header />
        {data &&
          <main>
            <Content>
              <ButtonText title="Excluir Nota"/>

              <h1>
                {data.title}
              </h1>

              <p>
                {data.description}
              </p>

              {data.links &&
                <Section title="Links úteis">
                  <Links>
                    {
                      <li><a href="">https://www.rocketseat.com.br</a></li>
                    }
                  </Links>
                </Section>
              }

              <Section title="Marcadores">
                <Tag title="express"/>
                <Tag title="nodejs"/>
              </Section>

              <Button title="Voltar" />
            </Content>
          </main>
        }
        
    </Container>
  )
}
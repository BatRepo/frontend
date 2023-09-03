/* eslint-disable react/react-in-jsx-scope */
import Header from "components/core/Header";
import CorpoPadrao from "../../core/CorpoPadrao";
import BatFooter from "components/core/Footer";
import { Container } from "./styles";
import { useAuth } from "hooks/auth";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const { loggued, token } = useAuth();
  const [logado, setLogado] = useState<boolean>(false);

  useEffect(() => {
    setLogado(loggued);
    if (token !== undefined) {
      setLogado(true);
    }
  }, [loggued, token]);

    return (
      <>   
        <Container container direction="column">
          <Container item id="header">
            <Header loggued={logado} />
          </Container>
          <Container item id="body">
            <CorpoPadrao loggued={logado}/>
          </Container>
            <BatFooter loggued={logado}/>
        </Container>
      </>
    );
};

export default HomePage;
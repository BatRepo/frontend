/* eslint-disable react/react-in-jsx-scope */
import Header from "components/core/Header";
import CorpoPadrao from "../../core/CorpoPadrao";
import BatFooter from "components/core/Footer";
import { Container } from "./styles";
import { useAuth } from "hooks/auth";
import { useEffect, useState } from "react";

// interface IHomePage {
  
// }

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
        {logado ? ( 
          <>        
            <Container container direction="column">
              <Container item id="header">
                <header>
                  <Header loggued={logado} />
                </header>
              </Container>
              <Container item id="body">
                <div> Teste </div>
              </Container>
              <footer>
                <BatFooter loggued={logado} />
              </footer>
            </Container>
          </>
          ) : (
            <>        
            <Container container direction="column">
              <Container item id="header">
                <header>
                  <Header loggued={logado} />
                </header>
              </Container>
              <Container item id="body">
                <CorpoPadrao />
              </Container>
              <footer>
                <BatFooter loggued={logado}/>
              </footer>
            </Container>
          </>
          )}
      </>
    );
};

export default HomePage;
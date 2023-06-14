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
                  <Header loggued />
                </header>
              </Container>
              <CorpoPadrao loggued />
                <BatFooter loggued />
            </Container>
          </>
          ) : (
            <>        
            <Container container direction="column">
              <Container item id="header">
                <header>
                  <Header loggued={false} />
                </header>
              </Container>
              <Container item id="body">
                <CorpoPadrao loggued={false}/>
              </Container>
                <BatFooter loggued={false}/>
            </Container>
          </>
          )}
      </>
    );
};

export default HomePage;
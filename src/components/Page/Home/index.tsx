/* eslint-disable react/react-in-jsx-scope */
import Header from "components/core/Header";
import CorpoPadrao from "../../core/CorpoPadrao";
import BatFooter from "components/core/Footer";
import { Container } from "./styles";

const HomePage: React.FC = () => {
    return (
      <>
          <Container container direction="column">
            <Container item id="header">
              <header>
                <Header />
              </header>
            </Container>
            <Container item id="body">
              <CorpoPadrao />
            </Container>
            <footer>
              <BatFooter />
            </footer>
          </Container>
      </>
    );
};

export default HomePage;
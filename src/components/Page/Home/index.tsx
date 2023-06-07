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
              <Header />
            </Container>
            <Container item id="body">
              <CorpoPadrao />
            </Container>
            <BatFooter />
          </Container>
      </>
    );
};

export default HomePage;
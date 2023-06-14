import React from 'react';
import { Container, ContainerGraph, ContainerGraphUnith } from './styles';
import { Box } from '@mui/material';
import BatFooter from '../Footer';
import GraphComponent from '../GraphComponent';

interface IBodydefault {
  loggued: boolean;
}

const CorpoPadrao: React.FC<IBodydefault> = ({ loggued }) => {

  const chartData1 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'Energia',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const chartData2 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'Agua',
      data: [50, 40, 30, 20, 10],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <>
    {loggued ? (
      <>
      <ContainerGraph>
          <ContainerGraphUnith id="eu1">
            <GraphComponent data={chartData1} />
          </ContainerGraphUnith>
          <ContainerGraphUnith>
            <GraphComponent data={chartData2} />
          </ContainerGraphUnith>
      </ContainerGraph>
          <BatFooter loggued={loggued} />
      </>
    ) : (
      <>
        <Container id="testeCorpo">
          Teste
        </Container>
      </>
    )}
    </>
  );
};

export default CorpoPadrao;

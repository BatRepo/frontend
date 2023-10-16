import React from 'react';
import { Container, ContainerGraph, ContainerGraphUnith } from './styles';
import GraphComponent from '../GraphComponent';
import { useMediaQuery, useTheme } from '@mui/material';
import { IDataGraphic } from 'utils/interfaces/dataGraphic';
// import VerticalCarousel from '../VerticalCarrosselImages';

interface IBodydefault {
  loggued: boolean;
}

const CorpoPadrao: React.FC<IBodydefault> = ({ loggued }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const chartData1: IDataGraphic = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'kWh',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }],
    title: 'Histórico de consumo de energia'
  };

  const chartData2 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'Agua',
      data: [50, 40, 30, 20, 10],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }],
    title: 'Histórico de consumo de Água'
  };

  return (
    <>
    {loggued ? (
      <>
      {!isMobile ? (
        <ContainerGraph>
        <ContainerGraphUnith id="eu1">
          <GraphComponent data={chartData1} />
        </ContainerGraphUnith>
        <ContainerGraphUnith>
          <GraphComponent data={chartData2} />
        </ContainerGraphUnith>
      </ContainerGraph>
      ) : (
        <div> Automação </div>
      )
        }
      </>
    ) : (
      <>
        <Container id="testeCorpo">
          {/* <VerticalCarousel images={['//images.ctfassets.net/m1fpgi36v4dh/78VAelY8VKIHPbh8AnVBZI/fcb553987036265f86d31716fe79f688/COLETE1BAT.png', '//images.ctfassets.net/m1fpgi36v4dh/6ls75rT6RVThH9vE2pVQnS/eb84a29e87f829225fddddf9d0924aaf/COLETE_REF._80901024_1.jpg']} /> */}
        </Container>
      </>
    )}
    </>
  );
};

export default CorpoPadrao;

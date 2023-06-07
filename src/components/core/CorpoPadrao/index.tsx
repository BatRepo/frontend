import React from 'react';
import { Container } from './styles';
import { Grid } from '@mui/material';

const CorpoPadrao: React.FC = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" id="teste">
        <Container>
        </Container>
      </Grid>
    </>
  );
};

export default CorpoPadrao;

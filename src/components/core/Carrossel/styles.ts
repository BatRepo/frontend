import { Box, Paper, Theme, styled } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';

export const Container: any = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
}));

export const ContainerPaper: any = styled(Box)(({ theme }) => ({
  marginTop: '45px',
}));

interface IView {
  theme: Theme;
  isHomePage?: boolean;
}
export const ViewStyled: any = styled(SwipeableViews)(({ theme, isHomePage }: IView) => ({
  '& div': {
    direction: isHomePage ? 'ltr' : 'rtl !important',
  }
}));

  export const PaperProduct: any = styled(Paper)(({ theme }) => ({
    p: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grayForte,
  }));
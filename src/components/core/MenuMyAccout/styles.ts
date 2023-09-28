import { Menu, MenuItem, styled } from "@mui/material";
import theme from "styles/theme";

export const MenuContainer: any = styled(Menu)({
  '& div:nth-child(3)': {
    backgroundColor: 'transparent',
  }
});

export const MenuItemContainer: any = styled(MenuItem)({
  color: theme.palette.vermelho,
  fontFamily: 'Righteous',
  fontSize: '16px',
  fontWeight: 500,
  backgroundColor: theme.palette.grayFraco,
  '&:hover': {
    backgroundColor: theme.palette.amarelo,
  },
});
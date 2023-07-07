import { Menu, MenuItem, styled } from "@mui/material";

export const MenuContainer: any = styled(Menu)({
  '& div:nth-child(3)': {
    backgroundColor: 'transparent',
  }
});

export const MenuItemContainer: any = styled(MenuItem)({
  color: '#EE0000',
  fontFamily: 'Righteous',
  fontSize: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FFD850',
  },
});
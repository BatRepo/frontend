import { Box, Theme, styled } from "@mui/material";

interface colorBackgroud {
  theme: Theme;
  color?: '#696969' | '#FFD850';
}

export const Container: any = styled(Box)(({ theme, color }: colorBackgroud) => ({
  display: 'flex',
  padding: '12px',
  justifyContent: 'center',
  backgroundColor: color || '#696969',
}));
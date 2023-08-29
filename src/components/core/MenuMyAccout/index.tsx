import React, { useState } from 'react';
import Fade from '@mui/material/Fade';
import { ContainerButtons } from '../Header/styles';
import Router from 'next/router';
import ExitModal from '../ExitModal';
import { MenuContainer, MenuItemContainer } from './styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// interface IMenuMyAccout {
//   open: boolean;
//   handleClose(): void
// }

export default function MenuMyAccount() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isExitModalOpen, setExitModalOpen] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const registerRedirect= () => {
    Router.push('/register');
  };

  const handleExit = () => {
    setExitModalOpen(true);
  };

  const handleExitModalClose = () => {
    setExitModalOpen(false);
  };

  return (
    <>
      <div>
        <ContainerButtons
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Minha Conta
        </ContainerButtons>
        <MenuContainer
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItemContainer onClick={registerRedirect}>Cadastrar Conta</MenuItemContainer>
          <MenuItemContainer onClick={handleExit}>Sair</MenuItemContainer>
        </MenuContainer>
      </div>
      {isExitModalOpen && <ExitModal isOpen={true} handleClose={handleExitModalClose} />}
    </>
  );
}
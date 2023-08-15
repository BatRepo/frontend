import { Button } from '@mui/material';
import React from 'react';
import { ContainerButtons, ContainerModal, ModalStyled, TypographyStyled } from './styles';
import { LogoutUserFactory } from 'infra/factories/use-cases/user/LogoutUserFactory';
import { useUser } from 'hooks/user';

interface IExit {
  isOpen: boolean;
  handleClose(): void;
}

const ExitModal: React.FC<IExit> = ({ isOpen, handleClose }) => {

  const logoutUser = LogoutUserFactory();
  const { userId } = useUser();
  

  const handleExit = async () => {
    if (userId && userId != undefined) {
        await logoutUser.execute({ userId });
        window.location.reload();
    }
    else {
      console.log('logout error factory');
    }
  }

  return (
    <>
    <ModalStyled
      open={isOpen}
      onClose={handleClose}
      aria-describedby="modal-modal-description"
    >
      <ContainerModal>
        <TypographyStyled id="modal-modal-description" sx={{ mt: 2 }}>
          Deseja realmente Sair ?
        </TypographyStyled>
        <ContainerButtons>
          <Button
            type="submit"
            variant="contained"
            sx={{ opacity: '0.7', }}
            onClick={handleExit}
          >
            Sair
          </Button>
          <Button
            type="reset"
            variant="contained"
            sx={{ opacity: '0.5' }}
            onClick={handleClose}
          >
            Voltar
          </Button>
      </ContainerButtons>
      </ContainerModal>
    </ModalStyled>
    </>
  );
};

export default ExitModal;

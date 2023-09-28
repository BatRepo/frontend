import { Button, Divider, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IProduct } from "utils/interfaces/product"
import CloseIcon from '@mui/icons-material/Close';
import { ContainerModal, ContentContainer, ImageContainer, Images, TitleContainer, TypographyContainer } from './styles';

interface IModalProps {
  product?: IProduct;
  open: boolean;
}

const ModalProduct: React.FC<IModalProps> = ({ product, open }) => {
  const [openModal, setOpenModal] = useState<boolean>(open);

  const handleClose = () => {
    setOpenModal(false);
  };
  
  return(
    <>
  <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContainerModal>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '18px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <ContentContainer id="ContentContainer">
          <TitleContainer variant="h6" component="h2" id="title">
            {product.name}
          </TitleContainer>
          <TypographyContainer sx={{ mt: 2 }}>{product.description}</TypographyContainer>
          <TypographyContainer sx={{ mt: 2 }}>Preço: ${product.price}</TypographyContainer>
          <Images>
            <ImageContainer
              src={product.images[0].file[0]}
              alt={`Image ${product.images[0].file[0]}`}
            />
            <Divider />
            <ImageContainer
              src={product.sizes_image[0].file[0]}
              alt={`Image ${product.sizes_image[0].file[0]}`}
            />
          </Images>
          <Button> Comprar </Button>
          <Button> Adicionar ao Carrinho </Button>
        </ContentContainer>
      </ContainerModal>
    </Modal>
    </>
  );
}

export default ModalProduct;

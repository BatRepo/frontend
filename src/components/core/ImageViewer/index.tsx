import React, { useState } from 'react';

interface IImageViewer {
  imageUrls: [];
}

const ImageViewer: React.FC<IImageViewer> = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => {
    // Fechar a visualização
    // Pode ser implementado de acordo com sua lógica específica
    // Por exemplo, definindo um estado para mostrar/ocultar o componente
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="image-viewer">
      <div className="image-container">
        <img src={imageUrls[currentImageIndex]} alt="Imagem" />
        <button className="close-button" onClick={handleClose}>
          Fechar
        </button>
      </div>
      <div className="navigation-buttons">
        {currentImageIndex > 0 && (
          <button className="previous-button" onClick={handlePrevious}>
            Anterior
          </button>
        )}
        {currentImageIndex < imageUrls.length - 1 && (
          <button className="next-button" onClick={handleNext}>
            Próxima
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageViewer;
import React from 'react';
import { Alert, Snackbar } from "@mui/material";

interface ISuccessBar {
  isOpen: boolean;
  handleClose(): void;
  severityOption: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

const SuccessBar: React.FC<ISuccessBar> = ({ isOpen, handleClose, severityOption, message }) => {

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severityOption} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SuccessBar;

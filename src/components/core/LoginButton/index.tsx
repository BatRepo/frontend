import React, { useState } from 'react';
import { 
    Avatar,
    Box, 
    Divider, 
    IconButton, 
    ListItemIcon, 
    Menu, 
    MenuItem, 
    Tooltip, 
  } from '@mui/material';

const LoginButton = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState();
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
        <Box>
            <Tooltip title="Account settings">
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 32, height: 32 }}>W</Avatar>
            </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem 
                onClick={handleClose}
                >
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem 
                    onClick={handleClose}
                >
                <ListItemIcon>
                    {/* <Settings fontSize="small" /> */}
                </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem 
                    onClick={handleClose}
                >
                <ListItemIcon>
                    {/* <Logout fontSize="small" /> */}
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>
        </Box>
    </>
  );
};

export default LoginButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toolbar, IconButton, Typography, Box, Tooltip, Avatar, Menu, MenuItem, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface IProps {
    handleDrawerOpen?: any;
    handleOpen?: any;
    handleClose?: any;
    isOpen?: any;
    anchorElement?: any;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const MenuBar = (props: IProps) => {

  return (
    <AppBar position="fixed" open={props.isOpen} sx={{
          '& .MuiToolbar-root':{
            backgroundColor: '#FFFFFF',
            color: 'black'
          }
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.isOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={props.handleOpen} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={props.anchorElement}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(props.anchorElement)}
              onClose={props.handleClose}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={props.handleClose}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

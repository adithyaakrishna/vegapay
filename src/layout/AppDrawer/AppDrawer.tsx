import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import vegaPayLogo from '../../assets/vegapay.svg'
import SpaceDashboardSharpIcon from '@mui/icons-material/SpaceDashboardSharp';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import './AppDrawer.css';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface IProps {
  children?: React.ReactElement | null;
}


export const AppDrawer = (props: IProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

  // Array of Management Menus
  const managementItems = [
  {
    id: 0,
    icon: <SpaceDashboardSharpIcon />,
    link: '/',
    name: 'Team Management'
  },
  {
    id: 1,
    icon: <SpaceDashboardSharpIcon />,
    link: '/',
    name: 'Application Management'
  },
  {
    id: 2,
    icon: <SpaceDashboardSharpIcon />,
    link: '/',
    name: 'Corporate Management'
  },
  {
    id: 3,
    icon: <SpaceDashboardSharpIcon />,
    link: '/',
    name: 'User Management'
  }
]

// Array of Card Menus
const cardItems = [
  {
    id: 0,
    icon: <CreditCardOutlinedIcon />,
    link: '/cardSale',
    name: 'Card Sale'
  },
  {
    id: 1,
    icon: <CreditCardOutlinedIcon />,
    link: '/cardSale',
    name: 'Card Transaction'
  },
  {
    id: 2,
    icon: <CreditCardOutlinedIcon />,
    link: '/cardSale',
    name: 'Inventory Management'
  },
  {
    id: 3,
    icon: <CreditCardOutlinedIcon />,
    link: '/cardSale',
    name: 'Release Transaction'
  },
  {
    id: 4,
    icon: <CreditCardOutlinedIcon />,
    link: '/cardSale',
    name: 'Services'
  },
]

  // To handle drawer open
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  // To handle drawer close
  const handleDrawerClose = () => {
    setIsOpen(false);
  }

  // To handle the opening of menu bar
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  // To handle the closing of menu bar
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MenuBar isOpen={isOpen} anchorElement={anchorElement} handleOpen={handleOpen} handleClose={handleClose} handleDrawerOpen={handleDrawerOpen}  />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <img src={vegaPayLogo} className="logo" alt="VegaPay Logo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* Management Items */}
        <List>
          {managementItems.map((item) => (
            <Link key={item.id} to={item.link} >
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText secondary={item.name} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        {/* Card Items */}
        <List>
          {cardItems.map((item) => (
            <Link key={item.id} to={item.link}>
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText secondary={item.name} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={isOpen}>
          {props.children}
      </Main>
    </Box>
  );
}
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from './../assets/images/logo.png';
import MyItemHome from './item/impl/MyItemHome';
import MyItemHelpDesk from './item/impl/MyItemHelpDesk';
import MyItemContact from './item/impl/MyItemContact';
import MyItemDownload from './item/impl/MyItemDownload';
import MyItemWebTicket from './item/impl/MyItemWebTicket';
import MyItemEvolution from './item/impl/MyItemEvolution';
import MyItemWho from './item/impl/MyItemWho';
import MuiDrawer from '@mui/material/Drawer';
import MyItemSoftware from './item/impl/MyItemSoftware';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { MyDrawerProperty } from './item/MyDrawerProperty';
import { MDBFooter } from 'mdb-react-ui-kit';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

export default function MyDrawer(props: MyDrawerProperty) {
    return <Drawer variant="permanent" open={props.open}>
    <DrawerHeader>
      <IconButton onClick={props.handleDrawerClose}>
        {props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
    <ListItem disablePadding sx={{ display: 'block' }}>
          <MyItemHome handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemWho handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemSoftware handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemHelpDesk handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemContact handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemDownload handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemWebTicket handleClose={props.handleDrawerClose} open={props.open}/>
          <MyItemEvolution  handleClose={props.handleDrawerClose}open={props.open}/>
        </ListItem>
    </List>
    <MDBFooter className='bg-light text-center text-white'>
    <div className='text-center p-3'>
        <span>© 2020 Copyright</span>
      </div>
      <div className='text-center p-3'>
        <span>© 2020 Copyright</span>
      </div>
    </MDBFooter>
  </Drawer>
}
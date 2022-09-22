import React from 'react';
import './App.css';
import { Box, CssBaseline, Grid, styled, Typography } from '@mui/material';
import MyAppbar from './components/appbar/MyAppbar';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import SoftwarePage from './pages/SoftwarePage';
import HelpDeskPage from './pages/HelpDeskPage';
import Contatti from './pages/Contatti';
import DownloadPage from './pages/DownloadPage';
import WebTicketPage from './pages/WebTicketPage';
import Azienda40Page from './pages/Azienda40';
import Footer from './components/footer/Footer';
import GiottoPage from './pages/software/GiottoPage';
import GenyaPage from './pages/software/GenyaPage';
import ArcaPage from './pages/software/arca/ArcaPage';
import BPointPage from './pages/software/BPointPage';
import ArcaDetails from './pages/software/arca/ArcaDetails';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Routing = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/chi-siamo", element: <ChiSiamoPage /> },
    { path: "/software", element: <SoftwarePage /> },
    { path: "/help-desk", element: <HelpDeskPage /> },
    { path: "/contatti", element: <Contatti /> },
    { path: "/download", element: <DownloadPage /> },
    { path: "/web-ticket", element: <WebTicketPage /> },
    { path: "/software/giotto", element: <GiottoPage /> },
    { path: "/software/genya", element: <GenyaPage /> },
    { path: "/software/arca", element: <ArcaPage /> },
    { path: "/software/arca/details", element: <ArcaDetails /> },
    { path: "/sorftware/bpoint", element: <BPointPage /> },
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MyAppbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader/>
            <Routing/>
          </Box>
        </Box>   
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

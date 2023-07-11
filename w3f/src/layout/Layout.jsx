import { Box, Container } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import '../style/main.scss';


function Layout() {
  return (
    <CssBaseline styles={{ body: { backgroundColor: 'red' } }}>
      <Box sx={{backgroundColor: '#0C1115', width: '1320px', margin: '0 auto'}}>
        <Heder />
        <Outlet />

      </Box>
    </CssBaseline>
  );
}

export default Layout;

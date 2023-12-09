import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>

     
      <Box paddingX={2} paddingY={2} >
  
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href='/signin'
          >
            Log In
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href='/signup'
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;

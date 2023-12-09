import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';
const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Placeholder"
        width={{ xs: 100, md: 120 }}
        style={{ textDecoration: 'none' }}
      >
        <Box display={'flex'} alignItems={'center'} color={'primary.dark'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <Typography fontWeight={700} marginLeft={1} >
          Placeholder
        </Typography>
      </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          {/* <Link
            underline="none"
            component="a"
            href="/features"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Features
      
          </Link> */}
        </Box>
        {/* <Box marginRight={{ xs: 1, sm: 1 }}>
          <Link
            underline="none"
            component="a"
            href="/pricing"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Pricing
      
          </Link>
        </Box> */}

        <Box marginLeft={3} paddingLeft={3} >
          <Link
            underline="none"
            component="a"
            href='/signin'
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Log In
      
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            // target="blank"
            href='/signup'
            size="large"
          >
           Sign Up
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;

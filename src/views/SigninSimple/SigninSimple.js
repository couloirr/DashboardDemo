import React, {useRef, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';
import { Form } from './components';
import {useAuth} from '../../auth/AuthProvider';
import {  useNavigate } from 'react-router-dom';
const SigninSimple = () => {

  const { login, user } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log(login, 'login');
  const handleSubmit = async (e) => {
   
    const {email, password} = e;
    try {
      
      const {
        data: { user, session },
        error
      } = await login(email,password);
      if (error) console.log(error.message);
      if (user && session) navigate('/app');
    } catch (error) {
      console.log(`Login Failed ${error}`);
    }
   
  };
  return (
   
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            {isMd ? (
              <Grid item container justifyContent={'center'} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={'img'}
                    src={
                      'https://shorturl.at/itxCR'
                    }
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Form onSubmit={handleSubmit}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
   
  );
};

export default SigninSimple;

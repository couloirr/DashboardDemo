import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';
import { Form } from './components';
import { useAuth } from 'auth/AuthProvider';
import {  useNavigate } from 'react-router-dom';

const SignupSimple = () => {
  const {register} = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const handleSubmit = async (e) => {
    
   console.log(e);
   const {email, password} = e;
   try {
      
    const {
      data,
      error
    } = await register(email,password);
    if (error) console.log(error.message);
    else navigate('/app');
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
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Form onSubmit={handleSubmit} />
            </Grid>
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
          </Grid>
        </Container>
      </Box>
 
  );
};

export default SignupSimple;

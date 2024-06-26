import React, { useState } from "react";
import { Box, Container, Typography, TextField, FormControlLabel, Button, Grid, Link, CssBaseline, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        NBC News
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LogIn({ handleLogIn, isDarkMode}) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (email && validateEmail(email) && password) {
      handleLogIn();
      navigate("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="nbc news logo" />
        <Typography variant="h5" margin={2}>
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent',
                '& fieldset': {
                  borderColor:  'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor:  'black',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'black',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black',
              },
              '& .MuiOutlinedInput-input': {
                color:  'black',
                backgroundColor: 'transparent',
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent',
                '& fieldset': {
                  borderColor:  'black',
                },
                '&:hover fieldset': {
                  borderColor:  'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor:  'black',
                },
              },
              '& .MuiInputLabel-root': {
                color:  'black',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color:  'black',
              },
              '& .MuiOutlinedInput-input': {
                color:  'black',
                backgroundColor: 'transparent',
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" sx={{
              '&.Mui-checked': {
                color: 'rgb(192, 20, 20)',
              },
            }} />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              bgcolor: '#c31815',
              borderColor: 'white',
              color: 'white',
              "&:hover": {
                borderColor: '#c31815',
                backgroundColor: '#f6e7e7',
                color: '#c31815',
                transform: 'scale(1.05)'
              } 
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color: isDarkMode? 'white' : 'black' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" sx={{ color: isDarkMode? 'white' : 'black' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default LogIn;
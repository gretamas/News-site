import React, { useState } from 'react';
import { Box, Container, Typography, TextField, FormControlLabel, Button, Grid, Link, CssBaseline, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        CND News
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp({ handleLogIn }) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const errorColor = 'rgb(192, 20, 20)'; 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');

    if (!firstName) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (!lastName) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

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

    if (firstName && lastName && email && validateEmail(email) && password) {
      console.log({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
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
        <img src={logo} alt="CND News logo" />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstNameError}
                helperText={firstNameError ? "First Name is required" : ""}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: firstNameError ? errorColor : 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: firstNameError ? errorColor : 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: firstNameError ? errorColor : 'black',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: firstNameError ? errorColor : 'black',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: firstNameError ? errorColor : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'black',
                  },
                  '& .MuiFormHelperText-root': {
                    color: firstNameError ? errorColor : '',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={lastNameError}
                helperText={lastNameError ? "Last Name is required" : ""}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: lastNameError ? errorColor : 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: lastNameError ? errorColor : 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: lastNameError ? errorColor : 'black',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: lastNameError ? errorColor : 'black',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: lastNameError ? errorColor : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'black',
                  },
                  '& .MuiFormHelperText-root': {
                    color: lastNameError ? errorColor : '',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: emailError ? errorColor : 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: emailError ? errorColor : 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: emailError ? errorColor : 'black',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: emailError ? errorColor : 'black',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: emailError ? errorColor : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'black',
                  },
                  '& .MuiFormHelperText-root': {
                    color: emailError ? errorColor : '',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={passwordError}
                helperText={passwordError ? "Password is required" : ""}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent',
                    '& fieldset': {
                      borderColor: passwordError ? errorColor : 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: passwordError ? errorColor : 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: passwordError ? errorColor : 'black',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: passwordError ? errorColor : 'black',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: passwordError ? errorColor : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'black',
                  },
                  '& .MuiFormHelperText-root': {
                    color: passwordError ? errorColor : '',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" sx={{
                  '&.Mui-checked': {
                    color: 'rgb(192, 20, 20)',
                  },
                }} />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" sx={{ color: 'black' }}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

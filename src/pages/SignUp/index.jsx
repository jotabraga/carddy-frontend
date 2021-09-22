import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/auth';
import Container from '@material-ui/core/Container';
import { Copyright } from '../../components/Copyright';

export default function SignUp() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleChange = (event) => {
    console.log(formData);
    const newData = {...formData};
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirm password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

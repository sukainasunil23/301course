import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin } from 'react-google-login';
import {google} from '../../../config/constants';
import {connect} from 'react-redux';
import {login} from '../state/actions/index';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing.unit *1,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 1,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  }
});

export function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {classes} = props;
  const {login} = props;
  let error = false;
  const responseGoogle = (response) => {
  
    login(response)
      
    }
    const loginSubmit=(e)=>{
      e.preventDefault()
      let data={email:email,password:password}
      login(data)
    }
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10}>
        <div component='main'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              <Button
                type='submit'
                id="submit"
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={(e)=>loginSubmit(e)}
              >
                Sign In
              </Button>
              <Grid md={12}>
                <p>or</p>
              </Grid>
              <GoogleLogin
                className={classes.submit}
                clientId={google.loginClientId}
                buttonText='Login with Google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default (connect(null,{login}))(withStyles(styles)(Login))

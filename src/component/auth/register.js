import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function Register(){
    const classes = useStyles();
    return(
        <Container component="main">
            <CssBaseline>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Registration Form
                    </Typography>
                    <form className={classes.form}>
                        <TextField 
                            label='username'
                            name='username'
                            id='username'
                            fullWidth
                        />
                        <TextField 
                            label='password'
                            name='password'
                            id='password'
                            fullWidth
                            type="password"
                        />
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '50%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
        marginTop:  theme.spacing(3, 0, 2),
    }
  }));

export default Register;
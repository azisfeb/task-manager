import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function AddTask(props){
    const classes = useStyles();
    return(
        <Container component="main">
            <CssBaseline>
                <div className={classes.paper}>
                    {/* <Typography component="h1" variant="h5">
                        Registration Form
                    </Typography> */}
                    <form className={classes.form}>
                        <TextField 
                            variant="outlined"
                            label='Title'
                            name='title'
                            id='title'
                            fullWidth
                            onChange={props.handleTitle}
                            value={props.titleValue}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            rowsMax="4"
                            onChange={props.handleDescription}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            value={props.descriptionValue}
                        />
                        { props.editPhase ?
                          <Button
                              variant="contained"
                              color="secondary"
                              className={classes.submit}
                              onClick={() => props.handleUpdate(props.idForEdit)}
                          >
                              Update
                          </Button>
                        :
                          <Button
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick={props.handleAdd}
                          >
                              Add
                          </Button>
                        }
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

  export default AddTask;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Dashboard } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import AddTask from './addTask';
export default function Album(props) {
    console.log(props.task.length === undefined)

    const classes = useStyles();
    const cards = props.task.length === undefined ? [{ _id:'929292', title:'dummy', descriprion:'dummy', status:'open', priority:'urgent' }] : props.task; 

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Dashboard className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.toolbarBtnRight}
            onClick={props.handleLogout}
        >
            Logout
        </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {props.userdetail.username ? `Hi, ${props.userdetail.username}` : ''}
            </Typography>
            <AddTask 
                handleTitle={props.handleTitle}
                titleValue={props.titleValue}
                handleDescription={props.handleDescription}
                descriptionValue={props.descriptionValue}
                handleAdd={props.handleAdd}
                editPhase={props.editPhase}
                idForEdit={props.idForEdit}
                handleUpdate={props.handleUpdate}
            /> 
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                      onClick={() => props.handleEdit(card._id)}
                    >
                      Edit
                    </Button>
                    <Button size="small" color="primary"
                        onClick={() => props.handleDeleted(card._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    toolbarBtnRight: {
        marginLeft: '80%',
    }
  }));
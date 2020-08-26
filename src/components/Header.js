import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './link.css'
import {
  BrowserRouter as Router,
  Link,
  
} from 'react-router-dom';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom :theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    

    <div className={classes.root}>

                
      <AppBar position="static" color="primary">

        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <Link className={'Plus'} to="/">Home</Link>
        <Link className={'Plus'} to="/Graph">Graph</Link> 
        <Link className={'Plus'} to="/About">About</Link> 

         </Toolbar>
     </AppBar>

   
    </div>
  


  
  );
}



function Home(){
  return(
  <div>
    <h1>Hello From Home</h1>
    </div>
  )}

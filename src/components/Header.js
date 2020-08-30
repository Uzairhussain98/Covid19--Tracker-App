import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import image from './virus.png';
import useWebAnimations from "@wellyshen/use-web-animations";


import './link.css'
import {
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


  const { ref } = useWebAnimations({
    keyframes: [
      { transform: 'rotate(0)' } ,
      { transform: 'rotate(360deg)' }
    ],
    timing: {
      duration: 2000, // Run for 1000ms
      iterations: Infinity, // Repeat once
       direction:"alternate",// Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
  }}
    );











  return (
    

    <div className={classes.root}>

                
      <AppBar position="static" color="primary">

        <Toolbar>
          <img ref={ref} style={{height:"70px" , width:"70px" , marginRight:'10px' , float:"left"}} src={image} alt='virus' />
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




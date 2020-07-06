import React ,{useEffect ,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import  styles from './GlobalGrid.module.css';
import cx from 'classnames';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Global() {
  const classes = useStyles();

  const [GlobalData,setGlobalData] = useState();
  const [isLoading,setLoading] = useState(false);

  useEffect( () => {
      async function fetchGlobalData(){
          setLoading(true);
          const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
          console.log(apiResponse);
          const datafromAPI = await apiResponse.json();
          console.log(datafromAPI);
          setGlobalData(datafromAPI);
          setLoading(false);
          


      }

      fetchGlobalData();


  },[])

  const loading = "Loading" ;

  if (isLoading){
    return (
      <div>
     
      <Grid container spacing={3}>
    
        <Grid item xs={4}>
          <Paper className={cx(classes.paper, styles.infected )}>
              <Typography variant="h4" style={{color:"#8B008B"}} >Infected</Typography>
              <Typography variant="h5" color="primary">{loading}</Typography>
  <Typography variant="subtitle2" gutterBottom>Total Number Of Infected Patients </Typography>
              </Paper>
              <Paper className={cx(classes.paper, styles.active )}>
              <Typography variant="h4" style={{color:"orange"}}>Active</Typography>
              <Typography variant="h5" color="primary">{loading}</Typography>
              <Typography variant="subtitle2" gutterBottom>Total Number Of Active Patients </Typography>

              </Paper>


          <Paper className={cx(classes.paper, styles.recovered )}>
          <Typography variant="h4" style={{color:"green"}}>Recovered</Typography>
          <Typography variant="h5" color="primary">{loading}</Typography>
          <Typography variant="subtitle2" gutterBottom>Total Number Of Recovered Patients </Typography>


          </Paper>
          <Paper className={cx(classes.paper, styles.deaths)}>
          <Typography variant="h4" color="secondary">Deaths</Typography>
          <Typography variant="h5" color="primary">{loading}</Typography>
          <Typography variant="subtitle2" gutterBottom>Total Number Of Deaths </Typography>


          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>CountryPicker</Paper>
        </Grid>
      </Grid>
      
    </div>

      














    );}


  

  return (
    <div>
     
      <Grid container spacing={3}>
    
        <Grid item xs={4}>
          <Paper className={cx(classes.paper, styles.infected )}>
              <Typography variant="h4" style={{color:"#8B008B"}} >Infected</Typography>
  <Typography variant="h5" color="primary">
  <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_cases} displayType={'text'} thousandSeparator={true}  />
    
    </Typography>
  <Typography variant="subtitle2" gutterBottom>Total Number Of Infected Patients </Typography>
              </Paper>
              <Paper className={cx(classes.paper, styles.active )}>
              <Typography variant="h4" style={{color:"orange"}}>Active</Typography>
       
           <Typography variant="h5" color="primary">
           <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_active_cases
           +GlobalData.results[0].total_unresolved} 
            displayType={'text'} thousandSeparator={true} />
               {/* {GlobalData && GlobalData.results && GlobalData.results[0].total_active_cases+GlobalData.results[0].total_unresolved}  */}
               </Typography>
          
              <Typography variant="subtitle2" gutterBottom>Total Number Of Active Patients </Typography>

              </Paper>


          <Paper className={cx(classes.paper, styles.recovered )}>
          <Typography variant="h4" style={{color:"green"}}>Recovered</Typography>
          <Typography variant="h5" color="primary">
          <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_recovered}
           displayType={'text'} thousandSeparator={true}  />
          
          </Typography>
          <Typography variant="subtitle2" gutterBottom>Total Number Of Recovered Patients </Typography>


          </Paper>
          <Paper className={cx(classes.paper, styles.deaths)}>
          <Typography variant="h4" color="secondary">Deaths</Typography>
          <Typography variant="h5" color="primary">
          <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true}/>
            
          </Typography>
          <Typography variant="subtitle2" gutterBottom>Total Number Of Deaths </Typography>


          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>CountryPicker</Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}

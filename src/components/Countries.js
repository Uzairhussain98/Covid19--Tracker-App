import React ,{useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios' ;
import Columns from 'react-columns';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginRight:10,
    marginBottom:10,
    marginLeft:10,
    border:'1px solid black'

  },
});



const useFormStyles = makeStyles((theme) => ({
  rootform: {
    '& > *': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
}));






const Countries = () =>  {
  const classes = useStyles();
  const formclasses = useFormStyles();


  const [SearchCountries ,setSearchCountries] = useState("");
  const [Result ,setResult] = useState([]);



  useEffect(() => {
    
    
    axios.get("https://corona.lmao.ninja/v2/countries?sort=country")
    .then( res => {
      setResult(res.data);
      console.log(res);
  
  
    })
    .catch( err => {
      console.log(err)
    })

  },[]);






  const filterCountries = Result.filter(item => {
    return SearchCountries !== "" ? item.country.includes(SearchCountries) : item;
  });

  const countries = filterCountries.map( (data, i) => {
    return (
<Card 
    key ={i}
    className={classes.root}
    >

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={data.countryInfo.flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.country}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Total Cases {data.cases}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Total Deaths {data.deaths}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Total Recovered {data.recovered}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Total Critical {data.critical}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Total Active {data.active}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      );
    });
    

















  return (
    <div>
    <form className={formclasses.rootform} noValidate autoComplete="off">
    <TextField id="standard-basic" label="Search Country"
     onChange={e=> setSearchCountries(e.target.value)}/>
 
  </form>
  <br/>



<Columns>{countries}</Columns>
  </div>
  ) ;
    
  }
export default Countries ;
import React ,{useEffect, useState} from 'react';
import Chart from './Chart'

export default function Graph() {

    const [GlobalData,setGlobalData] = useState();


useEffect(() => {



    async function fetchGlobalData(){
        const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
        console.log(apiResponse);
        const datafromAPI = await apiResponse.json();
        console.log(datafromAPI);
        setGlobalData(datafromAPI);
        
      }

      fetchGlobalData();
    
    
    


  },[]);


  let totalCases = GlobalData && GlobalData.results && GlobalData.results[0].total_active_cases + GlobalData && GlobalData.results && GlobalData.results[0].total_unresolved;    
  let totalRecovered = GlobalData && GlobalData.results && GlobalData.results[0].total_recovered;
  let totalDeaths = GlobalData && GlobalData.results && GlobalData.results[0].total_deaths;
 

return(
<Chart totalCases={totalCases} totalDeaths={totalDeaths} totalRecovered={totalRecovered}  />



)
}






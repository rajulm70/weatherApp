import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}){

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "4e2fbf1c3ab34e2ad18a87d2031b34ca";

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : jsonResponse.name,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            feelsLike : jsonResponse.main.feels_like,
            humidity : jsonResponse.main.humidity,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    }

    let handleChange= (evt) =>{
        setCity(evt.target.value);
    }
    let handleSubmit = async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
        
    }

    return (
        <div className='searchbox'>
            <TextField id="city" label="Search City" variant="outlined"  value={city} onChange={handleChange} required/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" type='submit' onClick={handleSubmit} className='searchbutton'>Search</Button>
            { error && <p style={{color:'red'}}>No such place exists!</p>}
        </div>
    )
}
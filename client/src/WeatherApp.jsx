import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 42.05,
        humidity: 66,
        temp: 35.05,
        tempMax: 35.05,
        tempMin: 35.05,
        weather: 'Haze',
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}><b>Weather App!</b></h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
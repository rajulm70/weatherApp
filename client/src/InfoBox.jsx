import Card from '@mui/material/Card';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    let HOT_URL = "https://assets.thehansindia.com/h-upload/2020/03/05/951243-hot-weather.webp";
    let RAIN_URL = "https://imengine.public.prod.dur.navigacloud.com/?uuid=6B1E0381-5A0D-4A4B-B336-3298EDFB8CDD&function=original&type=preview";
    let COLD_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Winter_forest_silver.jpg/640px-Winter_forest_silver.jpg";
    return (
        <div>
            <div className='divinfo'>
                <Card sx={{ maxWidth: 345 }} className='infobox'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>=80 ? RAIN_URL : info.temp>20 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.humidity>=80 ? <ThunderstormIcon /> : info.temp>20 ? <WhatshotIcon /> : <AcUnitIcon />}&nbsp;&nbsp;
                        <b>{info.city}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature = <b>{info.temp}</b>&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temperature = {info.tempMin}&deg;C</div>
                            <div>Max Temperature = {info.tempMax}&deg;C</div>
                            <div><p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p></div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
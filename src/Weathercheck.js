import React from 'react'
import { useState } from 'react'

import axios from 'axios'
function Weathercheck() {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${'5be34bcec3964c269ec1684650872470'}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            wind: res.data.wind.speed,
        })

        setCity(res.data.name)

    }

    //Converting K to C
    let k = weather.temp;
    let C = k - 273.15

    const Weath = () => {
        return <div>
            <div className="winfo" style={{textAlign:"center"}}>
                <p style={{textAlign:"center",fontSize:"20px"}}>Weather information for {city}</p>
               <br></br> <hr></hr>
            </div>
            <div className="Weath">
                
                <div className="welement" style={{textAlign:"center"}}>
                <p style={{textAlign:"center",fontSize:"20px"}}>Temperature : {C.toFixed(2)} &#8451;</p>
                    
                </div>
                <div className="welement" style={{textAlign:"center"}}>
                <p style={{textAlign:"center",fontSize:"20px"}}>Humidity :{weather.humidity} %</p>
                    
                </div>
                <div className="welement" style={{textAlign:"center"}}>
                <p style={{textAlign:"center",fontSize:"20px"}}>Wind Speed :  {weather.wind} m/sec</p>
                    
                </div>
            </div>
        </div>
    }
    return (<div style={{marginLeft:"480px",marginTop:"50px",border:"4px solid black",marginRight:"330px",borderRadius:"10px"}}>
        <div className="weathhead" style={{textAlign:"center"}}><h1>Weather Info</h1></div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <div style={{marginLeft:"100px"}}><br></br>
                    <input  type="text" style={{ height: '30px', width: '250px', borderRadius: '7px' }} placeholder="city" name="loc" />
                    <span style={{ marginLeft: '10px' }}></span>
                    <button  className='p-2 btn btn-primary' style={{ height: '30px',fontSize: '20px',width: '80px',borderRadius: '7px'}}>Search</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                    
                    
                </form>

                {weather && <Weath />}
            </div>
        </div>

    </div>
    )
}



export default Weathercheck;




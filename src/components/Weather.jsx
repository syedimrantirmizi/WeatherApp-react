import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Weatherforc from './Weatherforc';
import Weatherdata from './Weatherdata';

const Weather = () => {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const totalMonth = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let day = days[d.getDay()];
    let month = totalMonth[d.getMonth()];
    const date = d.getDate()
    const [weatherData, setWeatherData] = useState(null);
    var imgIcon
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c88ea1e1a780b2e8679877aacab844fa&units=metric")
            setWeatherData(response.data);
            imgIcon = `http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex justify-center pt-11 items-center h-[878px] bg-mountain bg-no-repeat  bg-center bg-cover overflow-hidden'>
            <div className="flex items-center  justify-center w-[1500px] max-sm:w-[500px] xl:h-[800px] h-full" >
                <div className="bg-blue-500/50 rounded-3xl backdrop-blur w-[85%] h-[85%] p-10">
                    <div className="flex h-[50%] max-md:h-[35%] s gap-5">
                        <Weatherdata weatherData={weatherData} />
                        <div className="bg-white/60 rounded-3xl p-5 w-[40%] h-full flex flex-col justify-between items-center">
                            <div className='font-montserrat-thin xl:text-9xl max-xl:text-8xl max-md:text-5xl max-sm:text-3xl '>{day.slice(0, 3)}</div>
                            <div className='font-montserrat-thin text-3xl max-md:text-base'>
                                {date}/{month.slice(0, 3)}
                            </div>
                        </div>
                    </div>
                    <Weatherforc d={d} month={month} />
                </div>
            </div>
        </div>
    )
}

export default Weather
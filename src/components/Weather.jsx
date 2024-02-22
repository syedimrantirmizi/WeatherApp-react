import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Weather = () => {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const totalMonth = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let month = totalMonth[d.getMonth()];
    const date = d.getDate()
    const [weatherData, setWeatherData] = useState(null);
    var temp
    var imgIcon
    var desc
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c88ea1e1a780b2e8679877aacab844fa&units=metric")
            setWeatherData(response.data);
            imgIcon = `http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`
            temp = weatherData?.main.temp
            desc = weatherData?.weather[0].description
        } catch (error) {
            console.log(error)
        }
    }
    console.log(weatherData);

    return (
        <div className='flex justify-center pt-11  items-center h-[878px] bg-mountain bg-no-repeat  bg-center bg-cover overflow-hidden'>
            <div className="flex items-center  justify-center w-[1500px] xl:h-[800px] lg:h-[700px] md:h-[600px] h-full" >
                <div className="bg-blue-500/50 rounded-3xl backdrop-blur w-[85%] md:h-[75%] h-[85%] p-10">
                    <div className="flex h-[35%] sm:h-[50%] gap-5">
                        <aside className="bg-white/60 rounded-3xl p-10 w-[60%]  h-full flex flex-col justify-between ">
                            <section className='flex w-[90%] justify-between items-center'>
                            <div className="flex justify-between w-[80%] ">
                                <div><img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" width={100} /></div>
                            </div>
                            <div className='font-montserrat-thin text-4xl'>
                                {weatherData?.main.temp}°C
                            </div>
                            </section>
                            <div className='font-montserrat-thin pl-5 text-3xl'>
                                Its {weatherData?.weather[0].description}
                            </div>
                        </aside>
                        <div className="bg-white/60 rounded-3xl p-10 w-[40%] h-full">
                            <div className='font-montserrat-thin text-9xl'>{day.slice(0,3)}</div>
                            <div className='font-montserrat text-3xl pl-3'>
                                {date}/{month.slice(0,3)}
                            </div>
                        </div>
                    </div>
                    <section className="flex h-[65%] sm:h-[50%] pt-5 gap-5 flex-col sm:flex-row ">
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                        <div className="bg-white/60 rounded-3xl h-[20%] sm:h-full sm:w-[20%]"></div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Weather
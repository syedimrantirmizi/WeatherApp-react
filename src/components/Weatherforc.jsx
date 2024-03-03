import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Weatherforc = ({ d,month }) => {
    var Day = Math.floor(d.getTime() / 1000)
    var date = d.getDate()
    const [weatherForc, setWeatherForc] = useState(null)
    useEffect(() => {
        getWeatherForc();
    }, []);
    const getWeatherForc = async () => {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=c88ea1e1a780b2e8679877aacab844fa&units=metric")
            setWeatherForc(response.data.list)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(weatherForc);
    return (
        <section className="flex h-[65%] sm:h-[50%] pt-5 gap-5 flex-col md:flex-row ">
            {weatherForc?.map((value, index) => {
                if (value.dt_txt.slice(8, 10) - date == 1) {
                    var gottentime = value.dt_txt.slice(11, 13)
                    console.log(gottentime);
                    switch (gottentime) {
                        case "00":
                            var actualtime = "12 AM"
                            break;
                    
                        case "03":
                            var actualtime = "3 AM"
                            break;
                    
                        case "06":
                            var actualtime = "6 AM"
                            break;
                    
                        case "09":
                            var actualtime = "9 AM"
                            break;
                    
                        case "12":
                            var actualtime = "12 PM"
                            break;
                    
                        case "15":
                            var actualtime = "3 PM"
                            break;
                    
                        case "18":
                            var actualtime = "6 PM"
                            break;
                    
                        case "21":
                            var actualtime = "9 PM"
                            break;
                    
                        default:
                            break;
                    }
                    return (
                        <div key={index} className="bg-white/60 rounded-3xl h-[11%] max-sm:h-[8%] p-3 md:h-full md:w-[10%] lg:w-[12%] flex md:flex-col max-sm:text-[8px] text-xs xl:text-base justify-around items-center font-montserrat-thin">
                            <div className='flex items-center justify-center'><img src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} alt="" /></div>
                            <div> {value.main.temp}°C</div>
                            <div>{value.dt_txt.slice(8, 10)}/{month}</div>
                            <div>{actualtime}</div>
                            <div className='flex flex-col items-center justify-center'><p>{value.sys.pod == "d" ? "Day" : "Night"}</p> <p className='text-center'>{value.weather[0].description}</p></div>
                        </div>)
                }

            })}
        </section>
    )
}

export default Weatherforc
import React from 'react'

const Weatherdata = ({weatherData}) => {
    return (
        <aside className="bg-white/60 rounded-3xl p-10 w-[60%]  h-full flex flex-col justify-between ">
            <section className='flex w-[90%] justify-between items-center'>
                <div className="flex justify-between w-[80%] ">
                    <div><img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" width={100} /></div>
                </div>
                <div className='font-montserrat-thin text-4xl max-md:text-2xl max-sm:text-xs'>
                    {weatherData?.main.temp}°C
                </div>
            </section>
            <div className='font-montserrat-thin text-3xl max-md:text-xl max-sm:text-[10px]'>
                Its {weatherData?.weather[0].description}
            </div>
        </aside>
    )
}

export default Weatherdata
import React from 'react'

const Weatherdata = ({weatherData}) => {
    return (
        <aside className="bg-white/60 rounded-3xl p-10 max-sm:p-5 w-[60%]  h-full flex flex-col justify-between max-sm:items-center">
            <section className='flex w-[90%] justify-between items-center max-sm:flex-col'>
                <div className="flex justify-between">
                    <div><img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" width={100} height={100} /></div>
                </div>
                <div className='font-montserrat-thin text-4xl max-md:text-2xl max-sm:text-xl'>
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
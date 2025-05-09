import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeatherInfo from './hooks/weatherInfo'

function App() {

  const [location , setLocation] = useState("Lahore")
  const [isDisabled , setIsDisabled] = useState(true)
  const [country , setCountry ] = useState()
  const [tempC , setTempC] = useState()
  const [tempF , setTempF] = useState()
  const [humidity , setHumidity] = useState()
  const [windspeed , setWindspeed] = useState()
  const [dat,setDat] = useState()
  const [uv , setuv] = useState()
  const [feelslikeC , setFLC] = useState()
  const [feelslikeF , setFLF] = useState()
  const [windDirection , setWindDir] = useState()
  const [text , setText] = useState()
  const [region , setRegion] = useState()

  const changeLocation = () => setIsDisabled(false)

  const weatherInfo = useWeatherInfo(location)
  

  useEffect(() => {
    if(weatherInfo && weatherInfo.current && weatherInfo.location){
      setDat(weatherInfo.location.localtime )
      setTempC(weatherInfo.current.temp_c)
      setTempF(weatherInfo.current.temp_f)
      setWindspeed(weatherInfo.current.wind_kph)
      setHumidity(weatherInfo.current.humidity)
      setCountry(weatherInfo.location.country )
      setFLC(weatherInfo.current.feelslike_c)
      setFLF(weatherInfo.current.feelslike_f)
      setuv(weatherInfo.current.uv)
      setWindDir(weatherInfo.current.wind_dir)
      setText(weatherInfo.current.condition.text)
      setRegion(weatherInfo.location.region)
    }
  },[weatherInfo])
  

  return (
    <>
      <div >

        <div className='backdrop-blur-md p-4'>
          <h1 className='text-7xl text-white'>آج کا<span className='text-red-400'>موسم</span> </h1>
          <h3 className="text-4xl text-gray-300 ml-125 mt-2 text-left">
            Everything you need to know<br /> <span className='ml-20'>about <span className='text-6xl text-blue-500 text-bold italic'>weather</span></span>
          </h3>
        </div>

        <div>
          <h2 className='text-5xl text-white ml-20 pt-5 text-left'>Weather Update</h2>
          <h4 className='text-3xl text-white pt-2'>Current location</h4>
          <div className='flex '>
          <input 
          type="text" 
          value={location}
          disabled = {isDisabled}
          className='rounded-lg bg-blue-600 text-md text-gray-200 font-bold p-2 mt-5 ml-130' 
          onChange = { (e) => setLocation(e.target.value)}/>

          <button 
          onClick = {changeLocation}
          class="mt-5 ml-70 rounded-full px-2 py-2 bg-red-400 text-white font-bold ">
            Change Location
          </button>

          </div>

          <div>
            <h4 className='text-3xl text-white pt-2 text-left ml-25 mt-5'>Date & Time : 
              <span className='ml-30'>{dat}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-white pt-2 text-left ml-25 mt-5'>Region : 
              <span className='ml-50'>{region}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-white pt-2 text-left ml-25 mt-5'>Country : 
              <span className='ml-48'>{country}</span>
            </h4>
          </div>


          <div className='mb-20'>
            <h4 className='text-3xl text-white pt-2 text-left ml-25 mt-5'>Status : 
              <span className='ml-53'>{text}</span>
            </h4>
          </div>

          

          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Temperature in °C : 
              <span className='ml-13'>{tempC}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Temperature in °F : 
              <span className='ml-14'>{tempF}</span>
            </h4>
          </div>
          
          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Feels like °C : 
              <span className='ml-33'>{feelslikeC}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Feels like °F : 
              <span className='ml-35'>{feelslikeF}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Humidity : 
              <span className='ml-43'>{humidity}</span>
            </h4>
          </div>

          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>UV Index : 
              <span className='ml-44'>{uv}</span>
            </h4>
          </div>
          
          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Wind Speed : 
              <span className='ml-33'>{windspeed}</span>
            </h4>
          </div>

          


          <div>
            <h4 className='text-3xl text-gray-300 pt-2 text-left ml-25 mt-5'>Wind Direction : 
              <span className='ml-25'>{windDirection}</span>
            </h4>
          </div>

  
        </div>

        <p className="text-center text-gray-400 text-lg mt-10 italic">
          Stay prepared — check the weather before heading out! ☁️🌤️
        </p>

        <footer className="mt-10 text-center text-gray-400 text-sm italic">
           Powered by <a href="https://www.weatherapi.com/" target="_blank" className="text-blue-300 underline">WeatherAPI.com</a>
        </footer>


      </div>
    </>
  )
}

export default App

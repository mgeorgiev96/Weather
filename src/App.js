import React,{useState,useEffect} from 'react';
import './css/style.css'
import Style from './Style';
import Particles from './Particles';

function App() {
  let API = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=&appid=36dd9a41718de9537a5c1eb8cbf26226`
  let date = new Date()
  let moment  = require('moment')
  let dateUp = moment(date).format("LL")

  const [data,setData] = useState({
    weather: '',
    main_temp: '',
    feel_like:'',
    country: '',
    name: '',
    main: '',
    timezone: ''
  })

  const searchCity = ()=>{
    let image = document.querySelector('.image')
    let location = document.querySelector('.location').value
    let display = document.querySelector(".display")
    let API = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${location}&appid=36dd9a41718de9537a5c1eb8cbf26226`
    fetch(API).then(a=>a.json()).then(a=>setData({
      weather: a.weather[0].description,
      main_temp: 'Actual: '+Math.round(a.main.temp -273.15) + '°C',
      feel_like: 'Feels Like: '+Math.round(a.main.feels_like -273.15) + '°C',
      country: a.sys.country,
      name: a.name+" , ",
      main: a.weather[0].main,
      icon: a.weather[0].icon
    })
    )
    image.style.display = 'block'
  }



  return (
    <div className="container">
      <header>
      <h1>Current Weather</h1>
      <h3>{dateUp}</h3>
      <div className="search_container">
      <input className="location" placeholder="Enter a location...."></input>
      <button onClick={searchCity} className="fa fa-search-location"></button>
      </div>
      </header>
      <div className="data_container">
        <div className='img_container'>
        <h1>{data.name}{data.country}</h1>
        <img className='image' src={'http://openweathermap.org/img/wn/'+data.icon+'@2x.png'}></img>
        </div>
        <div className='temp_container'>
        <p>{data.main_temp}</p>
        <p>{data.feel_like}</p>
        <p className='description'>{data.main}</p>
        <p className='description'>{data.weather}</p>
        </div>

      </div>
      <Style/>
      <Particles/>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './Search.css'
import axios from 'axios';
import Card from './Card';

 function Search() {

const [cityName,setCityName]=useState('');
const [cityData, setCityData]=useState('');

//Fetching data from URL
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d54835d621cb9680162540cf35cc4e1`

async function getData(){
    //use try catch for error handling
    try{
        const data= await axios.get(url)
        console.log(data);
        setCityData({
            name:data?.data.name,
            tempt:data?.data.main.temp,
            temp_feels:data.data.main.feels_like,
            temp_min:data.data.main.temp_min,
            display:"block"
    })    
    }catch{
        console.log('Error he bhai')
        alert('Kindly Enter Currect City Name')
    }

}
  return (
    <div className='Serach'>
        <h1 className="text-3xl font-bold underline">WeatherApp</h1>
        <div>
        <input type='text' placeholder='Serach City' onChange={(e)=>setCityName(e.target.value)}></input>
        <button onClick={getData} >Submit</button>
        </div>
        {/* <Card/> */}
        <Card data={cityData}/>     
    </div>
    
  )
  
}

export default Search
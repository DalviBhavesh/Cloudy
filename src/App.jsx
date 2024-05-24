import React from 'react'
import { useEffect,useState } from "react";
import Input from './components/Input';
import Card from './components/Card'

function App() { 
    let [weather, setWeather] = useState();
    let [place, setPlace] = useState("Mumbai");
    
    let getWeather = useEffect(()=>{
        async function fetchData(place) {
        let APIkey = "371422a963a3b4242d317379b1df554c";
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIkey}`)
                        .then((result)=>{return result.json()})
                        // .then((res)=>{console.log(res)})

        //console.log(data)
        console.log("data loaded")
        setWeather(data);
        
        
        }

        fetchData(place)
    
    },[place])
        
  return (
    <>
      <div className='flex justify-end items-center fixed pe-2 lg:p-3 w-lvw z-50 backdrop-blur-xl lg:backdrop-blur-0 ' >
        <Input place = {place} setPlace = {setPlace} />
      </div>
      
      <div 
        className=' py-20 lg:p-2 h-lvh flex flex-row lg:flex-col flex-wrap justify-center items-center overflow-y-auto text-white '
        style={{
          // backgroundImage: `url(https://img.freepik.com/free-vector/gradient-dynamic-wavy-background_23-2149101396.jpg?t=st=1716575385~exp=1716578985~hmac=cdc70d0a20f33f9e58c7833e938c159ef3c8196c2205c1c0acd5f75532cd4670&w=1060)`,
          background: "radial-gradient(circle, rgba(52,119,211,1) 7%, rgba(2,3,37,1) 90%)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        >
          <Card place = {place} weather={weather} />
          
      </div>
      
    </>
  )
}

export default App

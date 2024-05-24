import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiWeatherCloudy } from "react-icons/ti";


function Input(
    {
        place,
        setPlace
    }
){

    return(
        <> 
            <div className="w-lvw  lg:absolute flex  items-center lg:justify-start p-2 lg:pl-6">
                {/* <div className="w-10 h-10 flex justify-center text-center items-center text-6xl lg:text-5xl pl-2 pr-2"
                    style={{
                        backgroundImage: `url(./src/assets/cloudy.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}></div> */}
                      <img src="./src/assets/wind-power.gif" className="h-12 w-12 mx-2 shadow-lg rounded-full border-2 border-black" />
                <h1 className="hidden lg:block text-3xl text-white ">Cloudy.io</h1>
            </div>
            
            <div className="flex flex-row lg:pr-6 p-2 lg:p-0">
                
                
                <input
                    className='bg-white w-52 text-lg lg:w-80 pl-5 p-2 z-50 shadow rounded-s-full '
                    style={{
                            outline: "none",
                    }}  
                    onChange={(e)=>{setPlace(e.target.value)}}
                    placeholder="Search"
                    value={place}
                />
                <div 
                className='bg-white w-14 text-2xl flex justify-center items-center bg-transparent shadow  rounded-e-full hover:bg-slate-200 z-50'
                onClick={()=>{place !== "" && place.substring(place.length-1) !== " " ? setPlace(place+" "):""}}
                >
                    <BiSearchAlt />
                </div>
            </div>
           
        </>
    )

}

export default Input;
import React from "react";
import  { useState } from "react";
import { useNavigate  } from "react-router-dom";
import conf from "../src/assets/conf.webp";
const Home = () =>{
    const [RoomCode, setRoomCode] = useState(" ");
    const navigate = useNavigate();


    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    };




    return (
        <div className="">
            {/*Navbar */}
            <div className=" h-[6rem] bg--black"></div>
            {/* Hero */}
            <div className="relative h-screen">
                {/* Image*/}
                <div className="absolute h-full w-full flex overflow-hidden">
                    <img src= {conf}  className="object=cover w-full h-full" />

                </div>
                {/* Hero Info */}
                <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
            
                    <form onSubmit={submitCode} className = "flex felx-col justify-center items-center text-black ">
                        <div className="flex flex-col justify-center items-center">

                            <label>Enter The RoomCode:</label>

                            <input type="text" required placeholder="Enter the RoomCode" value={ RoomCode } onChange={(e) => setRoomCode(e.target.value)} font = 'sans-serif'></input>
                            <button type="submit">EnterRoom</button>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
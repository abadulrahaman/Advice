import React, { useEffect, useState } from "react";
import { FaDiceSix } from "react-icons/fa";

const Body = () => {

    const [advice, setAdvice] = useState('');

    const handleAdvice = async() => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        // console.log(jsonData);
        const { slip } = jsonData;
        setAdvice(slip);
    }

    useEffect(() => {
        handleAdvice();
    }, []);
    // Two parameters inside the useEffect, first is a function and second one is the dependencyArray

    return (
        <div className="h-screen bg-slate-800 flex justify-center items-center">
             <div className=" w-[320px] bg-slate-600 rounded-[8px] p-8">
                <p className="text-center text-xl">Advice #{advice.id}</p>
                <p className="font-bold text-3xl">"{advice.advice}"</p>
                <div className="flex justify-center m-2">
                <button onClick={handleAdvice} className="bg-lime-400 p-2 rounded-full">
                <FaDiceSix />
                </button>
                </div>
             </div>
        </div>
    )
}

export default Body;
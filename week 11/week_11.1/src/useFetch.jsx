import { useState, useEffect } from "react";
export function useFetch(url){
    const[finalData, setFinalData]= useState({});
    async function getDetail(){
        const response= await fetch(url);
        const json= await response.json();
        setFinalData(json); 
    }

    useEffect(()=>{
        getDetail();
    },[])
    return {
        finalData
    }
}
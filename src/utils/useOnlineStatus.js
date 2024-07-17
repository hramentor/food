import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"





const useOnlineStatus=()=>{

    const [isOnline,setIsOnline]= useState(true)


    useEffect(()=>{

        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
    },[])

    return isOnline

}


export default useOnlineStatus
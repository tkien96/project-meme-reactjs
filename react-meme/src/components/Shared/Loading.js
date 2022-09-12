import { useEffect, useState } from 'react'
import TopBarProgress from "react-topbar-progress-indicator"
import {
    useLocation
} from "react-router-dom";

export default function Loading (){
    /* Loading */
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState('')
    const location = useLocation()
    TopBarProgress.config({
        barColors: {
            "0": "#3482e2",
            "1.0": "#3482e2"
        },
        shadowBlur: 0
    });

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if (location.pathname === prevLoc) {
            setPrevLoc('')
        }
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])

    if(progress) {
        return  ( <TopBarProgress /> )
    }

    return ( <></> )
}
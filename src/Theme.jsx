import { useEffect } from "react";
import { createContext, useState } from "react";

const Themecontext = createContext(null)
export{Themecontext} 

const Themeprovider = ({children})=>{
    const [theme, setTheme] = useState('Light')
   useEffect(()=>{
        let getMode = localStorage.getItem('mode') 
        if (getMode != null) {
            setMode(getMode)
        }
   },[])

    const setMode = (value)=>{
        setTheme(value)
        localStorage.setItem('mode', value)
    }

    return(
        <Themecontext.Provider value={{theme, setMode}}>
            {children}
        </Themecontext.Provider>
    )
}

export default Themeprovider;
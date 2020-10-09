import React,{useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key,initialValue) => {
    const [darkMode, setMode] = useLocalStorage(key,initialValue);
    console.log("checking mode:",darkMode);
    useEffect(() => {
        darkMode 
        ? document.querySelector("body").classList.add("dark-mode") 
        : document.querySelector("body").classList.remove("dark-mode");
    },[darkMode]);
    return [darkMode, setMode];
}

export default useDarkMode;
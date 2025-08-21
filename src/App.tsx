import {CounterPart} from "./components/CounterPart/CounterPart.tsx";
import {SettingPart} from "./components/SettingPart/SettingPart.tsx";
import {useState} from "react";

// import {useEffect, useState} from "react";

export type ScreenInterfaceType = 'Incorrect value!' | 'Enter values and press Set' | number

export function App() {

    const storageMaxValue = Number(localStorage.getItem('maxValue'))
    const storageStartValue = Number(localStorage.getItem('startValue'))

    const [maxValue, setMaxValue] = useState<number>(storageMaxValue);

    const [startValue, setStartValue] = useState<number>(storageStartValue);

    const [screenInterface, setScreenInterface] = useState<ScreenInterfaceType>(startValue);

    // useEffect(() => {
    //     const storageMaxValue = localStorage.getItem('maxValue');
    //     if(storageMaxValue){
    //         setMaxValue(JSON.parse(storageMaxValue))
    //     }
    //
    //     const storageStartValue = localStorage.getItem('startValue');
    //     if(storageStartValue){
    //         setStartValue(JSON.parse(storageStartValue))
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue));
    //     localStorage.setItem('startValue', JSON.stringify(startValue));},
    //     [maxValue, startValue])

    const setOnClickHandler = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setScreenInterface(startValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    return (
        <>
            <SettingPart
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                onclick={setOnClickHandler}
                setScreenInterface={setScreenInterface}
            />

            <CounterPart
                maxValue={maxValue}
                startValue={startValue}
                counter={screenInterface}
                setScreenInterface={setScreenInterface}
            />
        </>

    )
}

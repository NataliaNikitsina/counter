import {Button} from "../Button.tsx";
import {Screen} from "./Screen.tsx";
import {ScreenInterfaceType} from "../../App.tsx";

type CounterPartPropsType = {
    maxValue: number
    startValue: number
    screenInterface: ScreenInterfaceType
    setScreenInterface: (screenInterface: ScreenInterfaceType) => void
}

export const CounterPart = ({startValue, maxValue, screenInterface, setScreenInterface}:CounterPartPropsType) => {

    const incOnClickHandler = () => {
        if (typeof(screenInterface)==="number" && screenInterface < maxValue) setScreenInterface(screenInterface + 1)
    };

    const resetOnClickHandler = () => {
        setScreenInterface(startValue)
    }

    return (
        <div className={'counter-container'}>
            <Screen value={screenInterface} isMaxValue={screenInterface === maxValue}/>
            <div className={'button-wrapper'}>
                <Button title={'inc'} onClick={incOnClickHandler} disabled={screenInterface === maxValue}/>
                <Button title={'reset'} onClick={resetOnClickHandler} disabled={screenInterface === startValue}/>
            </div>
        </div>
    )
};


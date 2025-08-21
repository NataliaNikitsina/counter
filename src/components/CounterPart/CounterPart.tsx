import {Button} from "../Button.tsx";
import {Screen} from "./Screen.tsx";
import {ScreenInterfaceType} from "../../App.tsx";

type CounterPartPropsType = {
    maxValue: number
    startValue: number
    counter: ScreenInterfaceType
    setScreenInterface: (screenInterface: ScreenInterfaceType) => void
}

export const CounterPart = ({startValue, maxValue, counter, setScreenInterface}:CounterPartPropsType) => {

    const incOnClickHandler = () => {
        if (typeof(counter)==="number" && counter < maxValue) setScreenInterface(counter + 1)
    };

    const resetOnClickHandler = () => {
        setScreenInterface(startValue)
    }

    return (
        <div className={'counter-container'}>
            <Screen value={counter} isMaxValue={counter === maxValue}/>
            <div className={'button-wrapper'}>
                <Button title={'inc'} onClick={incOnClickHandler} disabled={counter === maxValue}/>
                <Button title={'reset'} onClick={resetOnClickHandler} disabled={counter === startValue}/>
            </div>
        </div>
    )
};


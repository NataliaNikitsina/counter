import {Button} from "../Button.tsx";
import {Screen} from "./Screen.tsx";
import {ErrorType} from "../../App.tsx";

type CounterPartPropsType = {
    maxValue: number
    startValue: number
    // screenInterface: ScreenInterfaceType
    // setScreenInterface: (screenInterface: ScreenInterfaceType) => void
    counter: number
    setCounter: (counter: number) => void
    error: ErrorType
}

export const CounterPart = ({startValue, maxValue, counter, setCounter, error}:CounterPartPropsType) => {

    const incOnClickHandler = () => {
        if (counter < maxValue) setCounter(counter + 1)
    };

    const resetOnClickHandler = () => {
        setCounter(startValue)
    }

    return (
        <div className={'counter-container'}>
            <Screen value={counter} isMaxValue={counter === maxValue} error={error}/>
            <div className={'button-wrapper'}>
                <Button title={'inc'} onClick={incOnClickHandler} disabled={counter === maxValue}/>
                <Button title={'reset'} onClick={resetOnClickHandler} disabled={counter === startValue}/>
            </div>
        </div>
    )
};


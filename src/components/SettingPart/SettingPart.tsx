import {Input} from "./Input.tsx";
import {Button} from "../Button.tsx";
import {useState} from "react";
import {ErrorType} from "../../App.tsx";


type SettingPartPropsType = {
    maxValue: number;
    setMaxValue: (maxValue: number) => void
    startValue: number;
    setStartValue: (startValue: number) => void
    onclick: () => void
    error: ErrorType
    setError: (error: ErrorType) => void
    // setScreenInterface: (screenInterface: ScreenInterfaceType) => void
}

export const SettingPart = (props:SettingPartPropsType) => {

    const [isDisabled, setDisabled] = useState<boolean>(true);

    const onClickHandler = () => {
        props.onclick()
        setDisabled(true)
    }


    return (
        <div className="counter-container">
            <div className="setting">
                <Input labelTitle={'max value'}
                       onChange={props.setMaxValue}
                       value={props.maxValue}
                       setDisabled={setDisabled}
                       // setScreenInterface={props.setScreenInterface}
                       maxValue={props.maxValue}
                       startValue={props.startValue}
                       error={props.error}
                       setError={props.setError}
                />

                <Input labelTitle={'start value'}
                       onChange={props.setStartValue}
                       value={props.startValue}
                       setDisabled={setDisabled}
                       // setScreenInterface={props.setScreenInterface}
                       maxValue={props.maxValue}
                       startValue={props.startValue}
                       error={props.error}
                       setError={props.setError}
                />
            </div>
                <Button title={'set'} onClick={onClickHandler} disabled={isDisabled}/>
        </div>
    );
};


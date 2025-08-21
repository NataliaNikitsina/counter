import {ChangeEvent} from "react";
import {ScreenInterfaceType} from "../../App.tsx";

type InputPropsType = {
    labelTitle: string
    onChange: (value: number) => void
    value: number
    setDisabled: (isDisabled: boolean) => void
    setScreenInterface: (screenInterface: ScreenInterfaceType) => void
    maxValue: number;
    startValue: number;
}

export const Input = (props: InputPropsType) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (
            (props.labelTitle === 'max value' && +e.currentTarget.value <= props.startValue) ||
            (props.labelTitle === 'start value' && +e.currentTarget.value >= props.maxValue) ||
            (+e.currentTarget.value < 0)
        ) {
            props.onChange(+e.currentTarget.value)
            props.setScreenInterface('Incorrect value!')
            props.setDisabled(true)
        } else {
            props.onChange(+e.currentTarget.value)
            props.setScreenInterface('Enter values and press Set')
            props.setDisabled(false)
        }
    }

    const isInCorrectValue = props.value < 0 || props.maxValue <= props.startValue

    return (
        <div className={'input-field'}>
            <label>{props.labelTitle}</label>
            <input type={"number"} onChange={inputHandler} value={props.value}
                   className={isInCorrectValue ? 'incorrect-input' : ''}
            />
        </div>
    );
};


import {ErrorType} from "../../App.tsx";

type ScreenProps = {
    isMaxValue: boolean;
    value: number;
    error: ErrorType;
}

export const Screen = (props: ScreenProps) => {

    return (
            <div className={(props.isMaxValue || props.error === 'Incorrect value!') ? 'max-value screen' : 'screen'}>
            {props.error || props.value}</div>
    )
};

import {ScreenInterfaceType} from "../../App.tsx";

type ScreenProps = {
    value: ScreenInterfaceType;
    isMaxValue: boolean;
}

export const Screen = (props: ScreenProps) => {

    return (
        <div className={(props.isMaxValue || props.value === 'Incorrect value!') ? 'max-value screen' : 'screen'}>
            {props.value}
        </div>
    )
};

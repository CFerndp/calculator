import React from "react";

import Display from "./partials/Display/Display.tsx";
import Keyboard from "./partials/Keyboard/Keyboard.tsx";

import * as S from "./styles";
import {useCalculator} from "./hooks";

const Calculator: React.FC = () => {
    const {
        label,
        overwriteDisplay,
        addToDisplay,
        onCalc,
        onRemoveSymbol
    } = useCalculator();

    return (
        <S.Calculator>
            <Display label={label}/>
            <Keyboard
                onAddSymbol={addToDisplay}
                onRemoveSymbol={onRemoveSymbol}
                onDelete={() => overwriteDisplay('')}
                onCalc={onCalc}
            />
        </S.Calculator>
    )
}

export default Calculator;

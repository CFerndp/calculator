import React from "react";

import CalcButton from "./partials/CalcButton/CalcButton";

import * as S from "./styles";

type KeyboardProps = {
    onAddSymbol: (label: string) => void,
    onRemoveSymbol: () => void,
    onDelete: () => void,
    onCalc: () => void
}

const Keyboard: React.FC<KeyboardProps> = ({onAddSymbol, onDelete, onRemoveSymbol, onCalc}) => {
    return (
        <S.Keyboard>
            <CalcButton label="AC" onClick={onDelete}/>
            <CalcButton label="Del" onClick={onRemoveSymbol}/>
            <CalcButton label="%" onClick={() => onAddSymbol('%')}/>
            <CalcButton label="/" onClick={() => onAddSymbol('/')}/>
            <CalcButton label="7" onClick={() => onAddSymbol('7')}/>
            <CalcButton label="8" onClick={() => onAddSymbol('8')}/>
            <CalcButton label="9" onClick={() => onAddSymbol('9')}/>
            <CalcButton label="X" onClick={() => onAddSymbol('*')}/>
            <CalcButton label="4" onClick={() => onAddSymbol('4')}/>
            <CalcButton label="5" onClick={() => onAddSymbol('5')}/>
            <CalcButton label="6" onClick={() => onAddSymbol('6')}/>
            <CalcButton label="-" onClick={() => onAddSymbol('-')}/>
            <CalcButton label="1" onClick={() => onAddSymbol('1')}/>
            <CalcButton label="2" onClick={() => onAddSymbol('2')}/>
            <CalcButton label="3" onClick={() => onAddSymbol('3')}/>
            <CalcButton label="+" onClick={() => onAddSymbol('+')}/>
            <S.CeroButton label="0" onClick={() => onAddSymbol('0')}/>
            <S.AnsButton label="=" onClick={onCalc}/>
        </S.Keyboard>
    )
}

export default Keyboard;

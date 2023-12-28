import React from "react";

import * as S from "./styles";

type CalcButtonProps = {
    label: string
    onClick: () => void
    className?: string
}

const CalcButton: React.FC<CalcButtonProps> = ({label, onClick, className}) => {
    return <S.CalcButton className={className} onClick={onClick}>{label}</S.CalcButton>
}

export default CalcButton;

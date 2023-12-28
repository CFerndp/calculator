import React from "react";

import * as S from "./styles";

type DisplayProps = {
    label: string
}
const Display: React.FC<DisplayProps> = ({label = ''}) => {
    return <S.Display>
        <S.Label>{label}</S.Label>
    </S.Display>
}

export default Display

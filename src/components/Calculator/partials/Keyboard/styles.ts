import styled from "styled-components";
import CalcButton from "./partials/CalcButton/CalcButton";

export const Keyboard = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
`

export const CeroButton = styled(CalcButton)`
    grid-column: 1/4;
`

export const AnsButton = styled(CalcButton)`
    grid-column: 4/5;
`


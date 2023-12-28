import styled from "styled-components";
import {colors} from "@/styles/colors.ts";

export const Calculator = styled.div`
    height: 100%;
    width: 100%;
    display: grid;

    grid-template-rows: 1fr 3fr;

    border: 1px solid ${colors.meteor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
`

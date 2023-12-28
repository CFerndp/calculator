import styled from "styled-components";
import {colors} from "@/styles/colors";
import {fontSizes} from "@/styles/sizes.ts";


export const CalcButton = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;

    background-color: ${colors.pizza};
    color: ${colors.white};

    font-size: ${fontSizes.medium};

    &:hover {
        background-color: ${colors.meteor};
        color: ${colors.white};
    }
`

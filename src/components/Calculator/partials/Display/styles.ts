import styled from "styled-components";

import {fontSizes, paddings} from "@/styles/sizes";
import {colors} from "@/styles/colors";

export const Display = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;

    display: flex;
    justify-content: end;
    align-items: center;


    font-size: ${fontSizes.xlarge};
    background-color: ${colors.black};
    color: ${colors.pizza};
`

export const Label = styled.p`
    margin: ${paddings.xlarge};
`

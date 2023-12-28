import styled from "styled-components";

import {colors} from "@/styles/colors.ts";

export const Layout = styled.main`
    height: 100%;
    width: 100%;
    display: grid;
    background-color: ${colors.porcelain};

    grid-template-rows: 1fr 3fr 1fr;
    grid-template-columns: 1fr 3fr 1fr;

    grid-template-areas:
        ". . ."
        ". content ."
        ". . .";
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    grid-area: content;
`

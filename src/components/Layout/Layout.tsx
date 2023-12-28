import React, {PropsWithChildren} from "react";

import * as S from "./styles"

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <S.Layout>
            <S.Content>{children}</S.Content>
        </S.Layout>
    );
}

export default Layout

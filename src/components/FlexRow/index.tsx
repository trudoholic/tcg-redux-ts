import * as React from 'react';
import { StyledRow } from "./styles";

interface IProps {
    children: React.ReactNode
}

const FlexRow = ({ children }: IProps) => {
    return (
        <>
            <StyledRow>{children}</StyledRow>
        </>
    )
}

export default FlexRow
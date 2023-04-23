import { StyledBox, StyledColumn } from "./styles";

interface IProps {
    test: boolean
}

const Player = ({ test }: IProps) => {
    return (
        <StyledColumn>
            <StyledBox $primary={test}>Foo</StyledBox>
            <StyledBox $primary={!test}>Bar</StyledBox>
        </StyledColumn>
    )
}

export default Player
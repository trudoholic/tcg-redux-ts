import { StyledBox, StyledColumn } from "./styles";

interface IProps {
    idx: number
    name: string
}

const Player = ({ idx, name }: IProps) => {
    return (
        <StyledColumn>
            <StyledBox $primary={!!idx}>{name}</StyledBox>
            <StyledBox $primary={!idx}>{name}</StyledBox>
            <StyledBox $primary={!idx}>{name}</StyledBox>
        </StyledColumn>
    )
}

export default Player
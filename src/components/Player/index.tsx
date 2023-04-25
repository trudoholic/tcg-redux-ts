import {useSelector} from 'react-redux';
import {RootState} from "../../store";
import { StyledBox, StyledColumn } from "./styles";

interface IProps {
    idx: number
    name: string
}

const Player = ({ idx, name }: IProps) => {
  const {
    curGame,
    curPlay,
    curBeat,
  } = useSelector((state: RootState) => state.flow)

    return (
        <StyledColumn>
            <StyledBox $primary={idx === curGame}>{name}</StyledBox>
            <StyledBox $primary={idx === curPlay}>{name}</StyledBox>
            <StyledBox $primary={idx === curBeat}>{name}</StyledBox>
        </StyledColumn>
    )
}

export default Player
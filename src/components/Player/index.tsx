import { StyledBox, StyledColumn } from "./styles";
import useFlow from "../../hooks/useFlow";

interface IProps {
  idx: number
  name: string
}

const Player = ({ idx, name }: IProps) => {
  const {
    curGame,
    curPlay,
    curBeat,
  } = useFlow()

  return (
    <StyledColumn>
      <StyledBox $primary={idx === curGame}>{name}</StyledBox>
      <StyledBox $primary={idx === curPlay}>{name}</StyledBox>
      <StyledBox $primary={idx === curBeat}>{name}</StyledBox>
    </StyledColumn>
  )
}

export default Player
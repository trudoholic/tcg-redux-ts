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
      <StyledBox $tier={0} $primary={idx === curGame}>{name}</StyledBox>
      <StyledBox $tier={1} $primary={idx === curPlay}>{name}</StyledBox>
      <StyledBox $tier={2} $primary={idx === curBeat}>{name}</StyledBox>
    </StyledColumn>
  )
}

export default Player
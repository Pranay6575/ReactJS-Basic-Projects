import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectorBtn from "./SelectorBtn";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "./styled/Button";

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedValue) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = getRandomValue(1, 7);
    setCurrentDice(randomNumber); // missing (prev arrow)

    if (selectedValue === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedValue(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_selection">
        <TotalScore score={score} />
        <SelectorBtn
          error={error}
          setError={setError}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button className="plainBtn" onClick={resetScore}>Reset Score</Button>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_selection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 15px;
  }
  .plainBtn {
    background-color:white;
    color: black;
    border: 1px solid black;      
  }
`;

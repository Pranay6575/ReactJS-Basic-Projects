import styled from "styled-components";

const RoleDice = ({roleDice, currentDice}) => {
  

  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}
      >
        <img src={`/images/dice${currentDice}.svg`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  .dice {
    cursor: pointer;
  }
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

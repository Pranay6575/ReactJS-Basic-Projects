import styled from "styled-components";
import { Button } from "./styled/Button";

const StartPage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  height: 100vh;
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content h1 {
    font-size: 96px;
    font-weight: 600;
    white-space: nowrap;
  }
`;


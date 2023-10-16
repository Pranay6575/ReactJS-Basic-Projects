import styled from "styled-components";

const SelectorBtn = ({setError, error, selectedValue, setSelectedValue}) => {
  const arrCount = [1, 2, 3, 4, 5, 6];

  const numberErrorHandle = (value) =>{
    setSelectedValue(value);
    setError("");

  }

  return (
    <NumberSelector>
      <h3>{error}</h3>
    <div className="flex">
      {arrCount.map((value, i) => (
        <Box 
        isSelected = {value === selectedValue}
        key={i} 
        onClick={()=>numberErrorHandle(value)}>
          {value}
        </Box>
      ))}
    </div>
    <p>Select a Number</p>
    </NumberSelector>
  );
};

export default SelectorBtn;

const NumberSelector = styled.div`
display: flex;
flex-direction: column;
align-items:end;
gap: 30px;

h3 {
  color: #FF0C0C;
  font-size: 24px;
  font-weight: 400;
  line-height: 6.5px;
}
p{
    font-size: 24px;
    font-weight: 600;
}

.flex{
    display: flex;
    gap: 24px;
}
 
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(prop) => (prop.isSelected ? "black" : "white")};
  color: ${(prop2) => (prop2.isSelected ? "white" : "black")};
`;

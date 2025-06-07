import styled from "styled-components";

const StyledButtonOutlined = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: black;
  font-family: 'Montserrat Alternates', sans-serif;
  background-color: transparent;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 22px;
  @media (hover: hover) {
    &:hover {
        box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: white;
  font-family: 'Montserrat Alternates', sans-serif;
  background-color: black;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 22px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
  @media (hover: hover) {
    &:hover {
        box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;


export default function Buttons () {
    return (
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
            <StyledButtonOutlined>RECENT EPISODES</StyledButtonOutlined>
            <StyledButton>SUBSCRIBE</StyledButton>
        </div>
    )
}
import styled from "styled-components";

const StyledAnchor = styled.a`
  font-weight: 700;
  font-size: 16px;
  color: black;
  text-decoration: none;
  font-family: 'Montserrat Alternates', sans-serif;
  background-color: transparent;

  &:hover {
    color: #CD4631;
  }
`;

export default function Menus () {
    return (
        <div style={{display: 'flex', gap: '60px', alignItems: 'center'}}>
            <StyledAnchor href="#">Episodes</StyledAnchor>
            <StyledAnchor href="#">About</StyledAnchor>
            <StyledAnchor href="#">More</StyledAnchor>
        </div>
    )
}
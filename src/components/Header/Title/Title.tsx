import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 96px;
    font-family: 'Montserrat Alternates', sans-serif;
    width: 513px;
    letter-spacing: -0.04em;
    text-align: center;
    line-height: 1;

`

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: white;
  font-family: 'Montserrat Alternates', sans-serif;
  background-color: black;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px 48px;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.25);
  margin-top: 60px;
  @media (hover: hover) {
    &:hover {
        box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
    }
  }
  

  
`;


const TitleContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;

    &::before {
        position: absolute;
        content: '';
        display: inline-block;
        background-image: url('/HeroShapeSwirl.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 630px;
        height: 592px;
        left: 0;
        top: 70px;
    }

    &::after {
        position: absolute;
        content: '';
        display: inline-block;
        background-image: url('/stars.png');
        background-size: contain;
        background-repeat: no-repeat;
        width: 155px;
        height: 216px;
        right: 60px;
        top: 235px;
    }

    @media(max-width: 1014px) {
        &::after {
            display: none;
        }
        &::before {
            display: none;
        }
    }
`


export default function Title () {
    return (
        <TitleContainer>
            <StyledTitle>Your Daily <span style={{color: '#CD4631', lineHeight: 'inherit', verticalAlign: 'baseline'}}>Podcast</span></StyledTitle>
            <p style={{color: '#4D4D4D', fontSize: '16px', fontWeight: 'medium', fontFamily: 'Montserrat Alternates', width: '374px', textAlign: 'center', marginTop: '40px'}}>We cover all kinds of categories and a weekly special guest.</p>
            <StyledButton>SUBSCRIBE</StyledButton>
        
        </TitleContainer>
    )
}
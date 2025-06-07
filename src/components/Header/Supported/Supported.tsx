import styled from "styled-components"

const StyledItem = styled.div`
    width: 275px;
    height: 84px;
    display: flex;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 22.65;
    font-weight: bold;
`


export default function Supported () {
    return (
        <div style={{marginTop: '120px', maxWidth: '1160px', width: '100%', height: '124px', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', gap: '20px', alignItems: 'center'}}>
            <StyledItem>Supported by:</StyledItem>
            <StyledItem>Spotify</StyledItem>
            <StyledItem>GooglePodcasts</StyledItem>
            <StyledItem>YouTube</StyledItem>
        </div>
    )
}
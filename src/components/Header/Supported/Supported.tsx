import styled from "styled-components"
import youtube from '/Youtube.svg'
import googlePodcasts from '/GooglePodcast.svg' 
import spotify from '/Spotify.svg'

const StyledItem = styled.div`
    width: 275px;
    height: 84px;
    display: flex;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 22.65;
    font-weight: bold;
`

const StyledIconItem = styled.div`
    display: flex;
    align-items: center;
`


export default function Supported () {
    return (
        <div style={{marginTop: '120px', maxWidth: '1160px', width: '100%', height: '124px', borderTop: '1px solid black', borderBottom: '1.5px solid black', display: 'flex', gap: '20px', alignItems: 'center'}}>
            <StyledItem>Supported by:</StyledItem>
            <StyledIconItem style={{padding: '25px 73.5px'}}>
                <img src={spotify} alt={"Youtube"} style={{width: '128px', height: '34px'}}/>
            </StyledIconItem >
            <StyledIconItem  style={{padding: '24px 38.5px'}}>
                <img src={googlePodcasts} alt={"Youtube"} style={{width: '198px', height: '36px'}}/>
            </StyledIconItem>
            <StyledIconItem  style={{padding: '28px 75.5px'}}>
                <img src={youtube} alt={"Youtube"} style={{width: '124px', height: '28px'}}/>
            </StyledIconItem>
        </div>
    )
}
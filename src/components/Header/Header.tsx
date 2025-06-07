import type { FC } from "react";
import Title from "./Title/Title";
import PodcastSlider from "./PodcastSlider/PodcastSlider";
import Navigation from "./Navigation/Navigation";
import Supported from "./Supported/Supported";

interface IHeader {
}

 const Header: FC<IHeader> = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '1448px', backgroundColor: '#F7EDE8', alignItems: 'center'}}>
            <Navigation/>
            <Title />
            <PodcastSlider />
            <Supported />
        </div>
    )
}

export default Header;
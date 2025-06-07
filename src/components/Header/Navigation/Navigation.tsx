import Buttons from "./Buttons/Buttons";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";

export default function Navigation() {
    return (
        <div style={{maxWidth: '1160px', width: '100%', height: '74px', display: 'flex', justifyContent: 'space-between', margin: '24px 140px 64px 140px'}}>
            <Logo />
            <Menus />
            <Buttons />
        </div>
    )
}
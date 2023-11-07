import { ReactNode } from "react";
import NavBar from "../NavBar/navBar";

interface Props {
    children?: ReactNode
}

const Layout = ( {children}: Props ) => {
    return(
        <>
            <NavBar>
                <div> {children} </div>
            </NavBar>
        </>
    )
}

export default Layout; 
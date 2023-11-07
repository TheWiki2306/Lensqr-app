import { ReactNode } from "react";
import Link from "next/link";
import Logo from "../../assets/icons/logo.svg";

type NavProps = {
    children?: ReactNode
}

const NavBar = (props: NavProps) => {
    return ( 
        <>
            {props.children} 
            <div>
                <Link href="/"></Link>
            </div>
        </>
    );
};

export default NavBar;
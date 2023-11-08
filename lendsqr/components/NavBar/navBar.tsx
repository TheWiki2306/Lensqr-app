import { ReactNode } from "react";
import Link from "next/link";
import Logo from "../../assets/icons/logo.svg";
import Notification from "../../assets/icons/notif.svg";
import Search from "../../assets/icons/search.svg";
import Docs from "../../assets/icons/docs.svg"; 
import Avatar from "../../assets/icons/avatar.svg";
import DropDown from "../../assets/icons/dropdown.svg";

type NavProps = {
    children?: ReactNode
}

const NavBar = (props: NavProps) => {
    return ( 
        <>
            {props.children} 
            <div>
                <Link href="/">{Logo}</Link>
                <Search/>
                <Docs/>
                <Notification/>
                <Avatar/>
                <small>Olatunde</small>
                <DropDown/>
            </div>
        </>
    );
};

export default NavBar;
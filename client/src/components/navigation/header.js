import React from "react";
import { Link, withRouter } from "react-router-dom"


const Header = (props) => {
    console.log(props)
    return (
        <>
            <nav className="navbar fixed-top">
                <Link style={{ fontFamily: "Fredoka One" }} to="/" className=" navbar-brand align-items-center d-flex ">
                    Blog
                </Link>
            </nav>
        </>
    )
}

export default withRouter(Header)
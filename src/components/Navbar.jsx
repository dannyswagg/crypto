import React from "react";
import {Button, Menu, Typrography, Avatar} from "antd";
import {Link} from "react-router-dom";
import {FundOutlined} from "@ant-design/icons"

const Navbar = () => {
    return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typrography.Title level={2} classsName="logo">
                <Link to="/">Crypto Turbo</Link>
            </Typrography.Title>
            {/* <Button className="menu-control-container"></Button> */}
        </div>
    </div>
    )
}

export default Navbar;
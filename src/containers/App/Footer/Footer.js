import React from "react";
import styles from "./Footer.styled"
import Logo from "/Users/igorlevocko/Desktop/labs/HTML PROJECTS/labs_react/labs_react/src/Icons/logo.png"
import { FacebookOutlined,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Detailed information</h2>
                        <p>detailed information, you can find the following links</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img style={styles.logo} src={Logo} alt="Логотип" />
                    </div>
                    <div style={styles.verticalAlignCenter} className="col-md-4">
                        <div className="d-flex justify-content-between">
                            <a href="#"> 
                                <FacebookOutlined style={{color: 'blue'}}/>
                            </a>
                            <a href="#">
                                <TwitterOutlined style={{color: 'cyan'}}/>
                            </a>
                            <a href="#">
                                <LinkedinOutlined style={{color: '#31249e'}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center">
                    2023 IoT © Copyright all rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
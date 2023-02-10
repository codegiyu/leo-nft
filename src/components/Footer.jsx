import { Link } from "gatsby";
import React from "react";
import * as classes from "../styles/Footerstyle.module.scss";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTop}>
                <div className={classes.footerSocialsWrap}>
                    <p>MiNFT</p>
                    <div className={classes.mediaWrap}>
                        <Link to="#">
                            <img src={twitter} alt="twitter" className={classes.mediaIcon} />
                        </Link>
                        <Link to="#">
                            <img src={discord} alt="discord" className={classes.mediaIcon} />
                        </Link>
                    </div>
                </div>
                <nav className={classes.bottomLinks}>
                    <ul>
                        <a href="#about">
                            <li>
                                <p>About</p>
                            </li>
                        </a>
                        <a href="#mint">
                            <li>
                                <p>Mint</p>
                            </li>
                        </a>
                        <a href="#roadmap">
                            <li>
                                <p>Roadmap</p>
                            </li>
                        </a>
                        <a href="#team">
                            <li>
                                <p>The Team</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>
            <div className={classes.footerWrap}>
                <p className={classes.footerText}>&copy; 2023. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

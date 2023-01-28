import React from "react";
import * as headerClasses from "../styles/Headerstyle.module.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "../images/logo.png";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import { Link } from "gatsby";

const Header = ({props}) => {
    let {isMenuOpen, setIsMenuOpen} = props

    const handleMenuClick = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <header className={headerClasses.header}>
            <div className={headerClasses.headerWrap}>
                <Link to="/" className={headerClasses.logoLink}>
                    <div className={headerClasses.logoWrap}>
                        <img src={ logo } alt="logo" className={headerClasses.logo} />
                        <p className={headerClasses.logotext}>MiNFT</p>
                    </div>
                </Link>
                <nav className={headerClasses.navWrap}>
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
                <div className={headerClasses.headerButton}>
                    <a href="#mint" className={headerClasses.ctaButton}>
                        <p>Mint</p>
                    </a>
                    <button onClick={handleMenuClick} className={headerClasses.menuButton}>
                        <HiMenuAlt1 className={headerClasses.menuIcon} />
                    </button>
                </div>
                
            </div>
            <section className={`${headerClasses.menu_pane} ${isMenuOpen ? headerClasses.menuActive : ""}`}>
                <nav className={headerClasses.mobile_nav}>
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
                <a href="#mint" className={headerClasses.mobile_ctaButton}>
                    <p>Mint</p>
                </a>
                <div className={headerClasses.mediaWrap}>
                    <Link to="#">
                        <img src={twitter} alt="twitter" className={headerClasses.mediaIcon} />
                    </Link>
                    <Link to="#">
                        <img src={discord} alt="discord" className={headerClasses.mediaIcon} />
                    </Link>
                </div>
            </section>
        </header>
    )
}

export default Header
import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

const toggleNav = (e, setShowCollapsedNav, showCollapsedNav) => {
    e.preventDefault()
    setShowCollapsedNav(!showCollapsedNav)
}

const Nav = ({simpleNav, isHero}) => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    const [showDropdownNav, setShowDropdownNav] = useState(false)
    return (
        <nav className={`navbar fixed-top navbar-expand-xl navbar-dark ${isHero ? "menu-scrolling-hero" : "menu-scrolling-content"}`}>
            <div className="me-auto tog-container">
                <Link className="navbar-brand" to="/">
                    {/* <img src={NetMindedLogo} alt="NetMinded Logo"/> */}
                </Link>
                <button className="navbar-toggler" type="button" onClick={(e) => toggleNav(e, setShowCollapsedNav, showCollapsedNav )} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse nav-collapse ${showCollapsedNav ? "show" : ""}`} id="navbarCollapse">
                {!simpleNav ? <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/platform">Platform</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/contact" >Contact Us</Link>
                    </li>
                </ul> : 
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/">
                            Home
                        </Link>
                    </li>
                </ul>}
            </div>  
        </nav>
    )
}

export default Nav
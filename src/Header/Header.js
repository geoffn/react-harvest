import React from 'react';
import { motion } from 'framer-motion'


const Header = (

    <motion.div
        initial={{ x: 250 }}
        animate={{ x: 0 }}>



        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-brand">
                <a className="navbar-item" href="underconstruction.js">
                    <img src="/img/gfu_small.png" alt="logo"></img>
                    <h1>Grow For Us</h1>
                </a>



            </div>
            <div className="navbar-start">
                <a className="navbar-item" href="underconstruction.js">
                    Home
            </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="underconstruction.js">
                        Event &amp; Volunteering
                </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/underconstruction">
                            Events
                    </a>

                        <a className="navbar-item" href="/underconstruction.js">
                            News
                    </a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="underconstruction.js">
                        Foodbanks
                </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/foodbanks">
                            Search
                    </a>
                        <a className="navbar-item" href="/addfoodbank">
                            Resgister
                    </a>
                        <a className="navbar-item" href="/underconstruction">
                            News
                    </a>

                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="underconstruction.js">
                        About
                </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/about">
                            Grow For Us
                    </a>
                        <a className="navbar-item" href="/underconstruction">
                            Contact
                    </a>

                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" href="/adduser">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light" href="/underconstruction">
                            Log in
                    </a>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>

)

export default Header;



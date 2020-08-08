import React from 'react';
import { motion } from 'framer-motion'


const Header = (

    <motion.div
        initial={{ x: 250 }}
        animate={{ x: 0 }}>



        <div >
            <div>



                <a className="header-link" href="underconstruction.js">
                    Home
            </a>

                <a className="header-link" href="/Event">
                    Event Search
                </a>

                <a className="header-link" href="/AddEvent">
                    Add Event
                </a>

                <a className="header-link" href="/Foodbank">
                    Foodbanks
                </a>




                <div className="header-right">

                    <a className="header-button header-button-border" href="/adduser">
                        <strong>Sign up</strong>
                    </a>
                    <a className="header-button header-button-border" href="/underconstruction">
                        Log in
                    </a>
                </div>
            </div>
        </div>


    </motion.div>

)

export default Header;



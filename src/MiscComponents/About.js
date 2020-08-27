import React from 'react';
import { motion } from 'framer-motion'



const About = (

    <motion.div
        initial={{ x: 250 }}
        animate={{ x: 0 }}>



        <div>
            <div>



                <p>Grow For Us is a tool originally designed to offer a place to connect local gardeners and home owners that have fruit trees or extra food that could be harvested and donated to charities.
                In the Pacific Northwest there are many homes that have apple, plum, pear and a wide variety of other fruit trees that go unharvested.  These are generally good quality, healthy foods that are expensive to purchase in grocery stores.
                </p>
                <p>Also, when trying to coordinate an outing for our day of service event at work, I found it difficult to find something.  With this app, we are hoping to have a list of events for people to sign up for.
               </p>
                <p>&nbsp;</p>
                <h2>Created and Founder</h2>
                <h3>Geoff Nelson</h3>
                <a href="https://www.linkedin.com/in/geoff-nelson-9445a31/">Linked In</a>
                <p>
                    <img src="/img/g1.jpeg" className="bio-image" alt="Geoff Nelson" />
                </p>




            </div>
        </div>


    </motion.div >

)

export default About;


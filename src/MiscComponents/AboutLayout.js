import React from 'react'
import Aux from '../hoc/Aux'
import About from '../MiscComponents/About'
import header from '../Header/Header'

const AboutLayout = (props) => (

    <Aux>
        {header}
        <p>&nbsp;</p>
        {About}
    </Aux>
)

export default AboutLayout
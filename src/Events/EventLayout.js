import React from 'react'
import Aux from '../hoc/Aux'
import HarvestEventList from './HarvestEventList'
import Header from '../Header/Header'

const EventLayout = (props) => (

    <Aux>
        {Header}
        <HarvestEventList />
    </Aux>
)

export default EventLayout
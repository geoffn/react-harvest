import React from 'react'
import Aux from '../../hoc/Aux'
import AddEvent from './AddEvent'
import header from '../../Header/Header'

const AddEventLayout = (props) => (

    <Aux>
        {header}
        <p>&nbsp;</p>
        <AddEvent targeEvent="1" />
    </Aux>
)

export default AddEventLayout
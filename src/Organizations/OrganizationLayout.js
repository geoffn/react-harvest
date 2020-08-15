import React from 'react'
import Aux from '../hoc/Aux'
import OrganizationList from './OrganizationList'
import Header from '../Header/Header'

const OrganizationLayout = (props) => (

    <Aux>
        {Header}
        <OrganizationList />
    </Aux>
)

export default OrganizationLayout
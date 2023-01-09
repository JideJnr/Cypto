import React, { useContext } from 'react'
 import Main from './Main/Main'
import Dashboard from './Dashboard/Dashboard'

 import {AuthContext} from './Context/auth'

function CHome() {
    
    const {user} = useContext(AuthContext);

  return (
    <>{user ?

        <><Dashboard/></> :
        <><Main/></>
        
        }</>
  )
}

export default CHome

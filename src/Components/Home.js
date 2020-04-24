import React from 'react'
import { useHistory } from 'react-router-dom'



function Home() {

    const history = useHistory()

    return (

        <button onClick={() => {history.push('/pizza')}}>Pizza?</button>
    
    
    )


}
export default Home



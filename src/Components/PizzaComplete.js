import React from 'react'

function PizzaComplete(props) {

    const { allOrders } = props

return(

    <div>

        <p>Congrats! Pizza is on its way!</p>
        <pre>
        {JSON.stringify(allOrders[allOrders.length - 1])}
        </pre>

    </div>

)

}
export default PizzaComplete
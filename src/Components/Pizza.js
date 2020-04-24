import React from 'react'

function Pizza(props) {

    const { allOrders, onSubmit, orderErrors, orderButtonEnabled, updateForm, updateCheckbox, pizzaOrder } = props


    return(

        <div cyDiv='cyTest'>

            {
                allOrders.map(order => {


                    return(


                        <pre>{JSON.stringify(order)}</pre>


                    )



                })




            }
            
            
            <p><label>Name: </label><input onChange={updateForm} type='text' name='name' value={pizzaOrder.name} ></input></p>
            <p>
                <select onChange={updateForm} name='size' value={pizzaOrder.size}>

                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xlarge'>X-Large</option>

                </select>
            </p>
            <p>
                <label>Pepperoni</label><input onChange={updateCheckbox} type='checkbox' name='pepperoni' checked={pizzaOrder.pepperoni}></input>
            </p> 
            <p> 
                <label>Sausage</label><input onChange={updateCheckbox} type='checkbox' name='sausage' checked={pizzaOrder.sausage}></input>
            </p>
            <p>
                <label>Bell Peppers</label><input onChange={updateCheckbox} type='checkbox' name='bellpeppers' checked={pizzaOrder.bellpeppers}></input>
            </p>
            <p>
                <label>Red Onions</label><input onChange={updateCheckbox} type='checkbox' name='redonions' checked={pizzaOrder.redonions}></input>
            </p>

            <label>Special Instructions: </label><input onChange={updateForm} type='text' name='instructions' value={pizzaOrder.instructions}></input>
            <p><button cySubmitBtn='mainSubmit' onClick={onSubmit} disabled={!orderButtonEnabled}>Add to Order</button></p>

            {orderErrors.name}

        </div>


    )

}

export default Pizza
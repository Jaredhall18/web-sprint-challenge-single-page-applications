
import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom';

export default function PizzaForm() {

    return(
        <form id="pizza-form">
            <div>
                <h2>Build your Pizza</h2>

                <label id="name-input">Name
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Size
                    <select
                    value={values.size}
                    onChange={onChange}
                    name='name'
                    type='text'
                    >
                    <option value=''>- Select a size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>    
                    <option value='large'>Large</option>
                    <option value='family'>Family Size</option>                
                    </select>
                </label>
            </div>

            <div>
                <h4>Choice of Toppings</h4>

                <label>Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                        onChange={onChange}
                        checked={values.chicken}
                    />
                </label>
                <label>Meatballs
                    <input
                        type="checkbox"
                        name="meatballs"
                        onChange={onChange}
                        checked={values.meatballs}
                    />
                </label>
                <label>Olives
                    <input
                        type="checkbox"
                        name="olives"
                        onChange={onChange}
                        checked={values.olives}
                    />
                </label>
                <label>Cheese
                    <input
                        type="checkbox"
                        name="cheese"
                        onChange={onChange}
                        checked={values.cheese}
                    />
                </label>

                <label id="special-text"> Special Instructions
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
            </div>

            <button disabled={disabled}>Add to Order</button>
        </form>
    )
}



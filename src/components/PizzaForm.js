
import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom';

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
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

                <label id='size-dropdown'>Size
                    <select
                    value={values.size}
                    onChange={onChange}
                    name='size'
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
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    type='text'
                    />
                </label>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <button disabled={disabled} id="order-button">Add to Order</button>
        </form>
    )
}



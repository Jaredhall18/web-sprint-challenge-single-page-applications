import React, { useState, useEffect } from "react";
import axios from 'axios'; //To post data later?
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/formSchema'

//import components
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'


//Initial States

const initialFormValues = {
  name: '',
  size: '',
  chicken: false,
  meatballs: false,
  olives: false,
  cheese: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}
const initialOrders = []
const initialDisabled = true


const App = () => {
//passing in states
const [orders, setOrders] = useState(initialOrders)       
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['chicken', 'meatballs', 'olives', 'cheese'].filter(topping => !!formValues[topping])
    }
    formSubmit(newOrder);
  }

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <Switch>
       <Route path={'/pizza'}>
          <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
      
    </>
  );
};
export default App;

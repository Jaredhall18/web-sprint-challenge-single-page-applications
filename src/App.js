import React, { useState, useEffect } from "react";
import axios from 'axios'; //To post data later?
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

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
          // change={inputChange}
          // submit={formSubmit}
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

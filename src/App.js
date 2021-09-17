import React from "react";
import axios from 'axios'; //To post data later?
import { Route, Link, Switch } from 'react-router-dom';

//import components
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import Confirmation from './components/Confirmation'

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
const initialOrder=[]
const initialDisabled = true


const App = () => {
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
          <PizzaForm />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
      
    </>
  );
};
export default App;

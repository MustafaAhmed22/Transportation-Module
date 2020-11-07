import React, { Component, Fragment } from 'react';
import Table from './Table'
import Data from './companyData/data'
import { BrowserRouter, Route, Router } from 'react-router-dom';
    class App extends Component {

      render(){
        return (
          <Fragment>
          <Route path='/' exact component={Table}/>
          <Route path='/data'  component={Data}/>
          </Fragment>
        )
      }
  }
export default App;

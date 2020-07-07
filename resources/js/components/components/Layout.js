import React from 'react';
import {Switch, withRouter, Route, BrowserRouter as Router} from 'react-router-dom'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Complejo from '../pages/Complejo'
import Deporte from '../pages/Deporte'

const Layout = () => {
  return (
    <div>
        <Menu />
        <div className="wrap">
          <div className="container">
            <Switch>
              <Route path='/complejo' component={Complejo} />
              <Route path='/deporte' component={Deporte} />
              <Route path='/home' component={Home} />
              <Route path='/' component={Home} />
            </Switch>
            <Footer />
          </div>
        </div>
    </div>
  )
   
}

export default withRouter(Layout);

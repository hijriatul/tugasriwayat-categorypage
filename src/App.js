import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Riwayat from './container/RiwayatPage'
import Category from './container/CategoryPage'

class Component extends React.Component {
  render() {
    return(
      
      <Switch>
        <Route path="/riwayat" exact component={Riwayat} />
        <Route path="/category" exact component={Category} />

      </Switch>
    );
  }
}

export default Component;
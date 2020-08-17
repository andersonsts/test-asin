import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardDetails from './page/CardDetails';
import Dashboard from './page/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemons/:pokemonId" component={CardDetails} />
  </Switch>
);

export default Routes;

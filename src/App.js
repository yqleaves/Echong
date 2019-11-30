import React from 'react'
import {HashRouter,Switch,Redirect} from "react-router-dom"
import routeEach from "./utils/routeEach"
import { RouteConfig } from './router';


class App extends React.Component {
    render() {
        return (
          <HashRouter>
               <Switch>
                   <Redirect from="/" to="/selected" exact/>
                   {routeEach(RouteConfig)}
               </Switch>
          </HashRouter>
        )
    }
}

export default App;
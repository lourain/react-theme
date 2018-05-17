import React from 'react';
import { Route,Redirect } from "react-router-dom";

import App from '../App'
import Test from '../test'

export default () => {
    return [
        <Route path='/'  render={()=><Redirect to='/index'/>} exact key="root" />,
        <Route path='/test' component={Test} exact key='test'/>,
        <Route path='/index' component={App} exact key='index'/>,
    ]
}

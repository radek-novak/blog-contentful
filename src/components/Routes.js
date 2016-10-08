import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Article from './pages/Article'
import List from './pages/List'
import App from './App'

const P404 = () => <div>404</div>
const About = () => <div>about</div>


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="page/:page" component={List}/>
      <Route path="article/:articleSlug" component={Article}/>
      <Route path="category/:categoryName" component={List}/>
      <Route path="category/:categoryName/:page" component={List}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component={P404}/>
  </Router>)


export default Routes

import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import ContactPage from '../components/ContactPage'
import ItemPage from '../components/ItemPage'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route path="/portfolio/:id" component={ItemPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
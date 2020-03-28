import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

// import getVisibleExpenses from './selectors/expenses'
// import { addExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
console.log('test')

ReactDOM.render(jsx, document.getElementById('app'))
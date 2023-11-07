import React from 'react'
import Nav from './navigation/Nav'
import Product from './components/Product'
import Recommended from './components/Recommended'
import SideBar from './components/SideBar'
import { Provider } from 'react-redux'
import { store } from './store'


export default function App() {
  return (
    <Provider store={store}>
      <SideBar/>
      <Nav/>
      <Recommended/>
      <Product/>
    </Provider>
  )
}
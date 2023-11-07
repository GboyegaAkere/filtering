import React from 'react'
import Nav from './navigation/Nav'
import Product from './components/Product'
import Recommended from './components/Recommended'


export default function App() {
  return (
    <>
      <Nav/>
      <Recommended/>
      <Product/>
    </>
  )
}
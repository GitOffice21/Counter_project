
// import { useState } from 'react';
import './App.css'
import React from 'react';
import Card from './components/card';
function App() {


  let example ={
    username:"Ankit",
    age:"23"
  }


  return (
    <>
  {

  <><h1 className=' text-black p-4 bg-amber-700 rounded-2xl'>Tailwind  test</h1>
       <Card channel ="Hello World" obj = {example} />
        <Card />

        </>
  }

    </>
  )
}

export default App;
export {Card}
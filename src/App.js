import React, { useState } from 'react';
import Avilable from './Data/Available';
import Requird from './Data/Requird';


function App() {
  let initalArray = [];
  let avaiArray = Avilable.map(item => item.items);
  let RequArray = Requird.map(item => item.items);
  let AVpro = Avilable.map(item => item.pname);

  avaiArray.map(myFunc);

  function myFunc(AVvalue, AVindex) {
    RequArray.map((REvalue, REindex) => {
      if (AVindex == REindex) {
        if (AVvalue >= REvalue) {
          initalArray.push(AVpro[REindex] + " : Available")
        } else {
          initalArray.push(AVpro[REindex] + " : (" + Math.abs(AVvalue - REvalue) + ")- Sortage")
        }
      }
    });
  }

  return (
    <div className='Container-fluid'>
      <div className="container">
        <h2>Available Products</h2>
        <div className='row'>
          <div className='col'>
            <div className="row">
              <ul>
                {Avilable.map((item) => {
                  return (<li key={item.id}>Name of the Product : {item.pname} - Availabile Quantity : {item.items}</li>)
                })}
              </ul>
            </div>
            <h2>Requird Quantity</h2>
            <div className="row">
              <ul>
                {Requird.map((item) => {
                  return (<li key={item.id}>Name of the Product : {item.pname} - Requird Quantity : {item.items}</li>)
                })}
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              {
                initalArray.map((item) => {
                  return <h4 key={item.toString()}>Process Done items: {item}</h4>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

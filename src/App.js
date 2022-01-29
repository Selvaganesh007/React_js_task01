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
          initalArray.push(AVpro[REindex] + " Product Available")
        } else {
          initalArray.push(AVpro[REindex] + " Product is " + Math.abs(AVvalue - REvalue) + " sortage")
        }
      }
    });
  }

  return (
    <div className='Container-fluid main'>
      <div className="container py-3">
        <div className='row py-3'>
          <div className="col avi-pro">
            <h2 className='avi-title py-2 fw-bold'>Available Products</h2>
            <div class="row">
              <div class="col">
                <h3 className='sub-ti fs-4 fw-2'>Name of the Product</h3>
                <ul>
                  {Avilable.map((item) => {
                    return (<li className='list' key={item.id}>{item.pname}</li>)
                  })}
                </ul>
              </div>
              <div class="col">
                <h3 className='sub-ti fs-4 fw-2'>Availabile Quantity</h3>
                <ul>
                  {Avilable.map((item) => {
                    return (<li className='list' key={item.id}>{item.items}</li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col avi-pro text-center">
            <h2 className='req-ti text-danger py-2 fw-bold'>Requird Quantity</h2>
            <div class="row">
              <div class="col">
                <h3 className='sub-ti fs-4 fw-2'>Name of the Product</h3>
                <ul>
                  {Requird.map((item) => {
                    return (<li className='list' key={item.id}>{item.pname}</li>)
                  })}
                </ul>
              </div>
              <div class="col">
                <h3 className='sub-ti fs-4 fw-2'>Requird Quantity</h3>
                <ul>
                  {Requird.map((item) => {
                    return (<li className='list' key={item.id}>{item.items}</li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row process text-center mt-5 py-3">
          <h3 className='pro-ti fw-bold'>Process Done items</h3>
          <div className='row'>
            <div className='col'>
              {
                initalArray.map((item) => {
                  return <h4 className='final-pro' key={item.toString()}>{item}</h4>
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

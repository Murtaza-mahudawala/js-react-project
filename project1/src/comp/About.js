import React from "react";

import { useState } from 'react'
function About(){
  const [result, setResult] = useState({
    amnt: 0,
    n1: 0,
    gst: 0,
    total: 0
  });

  function calculateAll() {
    var amount = document.getElementById('am').value;
    var amnt = parseFloat(amount);
    var n1 = 0;
    var gst = 0;
    var total = 0;

    if (amnt <= 100){
      n1 = amnt * 10;
    }
    else if (amnt > 100 && amnt <= 200){
      n1 = amnt * 15;
    }
    else{
      n1 = amnt * 20
    }

    gst = n1 + (n1 * (12/100));
    total = n1 + gst;

    setResult({ amnt, n1, gst, total });

  
  }
  return (
    <>
        <h1>HELLO</h1>
    <div className="App">
      <input type='text' id = 'am' placeholder='enter amount' />
      <button onClick={calculateAll}>submit</button>
      <p>Amount: {result.amnt}</p>
          <p>N1: {result.n1}</p>
          <p>GST: {result.gst}</p>
          <p>Total: {result.total}</p>
    </div>
    </>



  );
}

export default About;
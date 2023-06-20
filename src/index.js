import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './Search';
// import Search from './Search';

ReactDOM.render(<>
<div className='fullPage'>
  <div className='headerStyle'>
    <h1>Recipe Search API</h1>
    <p>Hey there! This website is using the Endamam API which has the data of thousands of foods, including international dishes.</p>
    <p>Enter <strong>ANY</strong> sort of food and get its recipe.</p>
  </div>
  <Search></Search>
  <App/>
</div>
</> 
, document.getElementById("root"));

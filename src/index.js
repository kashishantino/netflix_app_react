import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from "./Cards";
import  Data from './Data';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
<h1 className='heading_style'>List of top Netflix Series in 2020</h1>
  {
    Data.map(val=>{
      console.log(val);
      return<>
      <Card
    title={val.title}
    sname={val.sname}
    imgsrc={val.imgsrc}
  />
      </>
    })
  }
   
  </>

);

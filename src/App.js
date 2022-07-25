import React from 'react';
import Header from './Components/shared/Header/header';
import Footer from './Components/shared/Footer/footer';
import "./style/base.scss";



function App(props) {
  return (
    <div className="border-grey">
      <Header/>
      {props.children}     
      <Footer/>
     </div>
  );
}

export default App;

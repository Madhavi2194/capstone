import React from 'react';
import './App.css';
import './base.scss';
import './aem-grid.css';
import './breakpoints.scss';
import Header from './Components/shared/Header/header';
import Footer from './Components/shared/Footer/footer';



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

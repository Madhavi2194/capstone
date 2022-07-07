import React, { useState } from 'react';
import '../Accordion/accordion.scss';

const Accordion = ({ title, content,subcontent }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <section className="">
    <div className="accordion-item cart-accordian-section">
      <div className="accordion-title cart-accordian-detail" onClick={() => setIsActive(!isActive)}>
        <div className='cart-accordian-title'>{title}<br/><span className='regular-heading-s-14s'>{subcontent}</span></div>
       
        
        <div className='text-right'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content cart-left-section">{content}</div>}
    </div>
    </section>

    </>
  );
};

export default Accordion;
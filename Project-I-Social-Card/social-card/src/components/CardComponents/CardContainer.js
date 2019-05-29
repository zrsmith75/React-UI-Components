import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div className='cardContainer'>
      <CardBanner />
      <CardContent />

    </div>
  );
};

export default CardContainer;
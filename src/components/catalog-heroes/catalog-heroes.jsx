import React from 'react';
import CardHero from '../card-hero';

const CatalogHeroes = ({ data, onCardClick }) => {
  
  const heroes = data.map((item) => {
    
    const {id, ...itemProps} = item;
    
    return (
      <CardHero key={id} 
                {...itemProps}
                onCardClick={() => onCardClick(id)} 
      />
    );
  });
  
  return(
    <ul className='catalog-heroes'>
      { heroes }
    </ul>
  )
};

export default CatalogHeroes;
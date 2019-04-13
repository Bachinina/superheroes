import React from 'react';
import CardHeroSelected from '../card-hero/card-hero-selected.jsx';

const SelectedHeroes = ({ data, onDelete }) => {
  
  const heroesSelected = data.map((item) => {
    
    const { id, ...itemProps} = item;
    
    return (
      <CardHeroSelected key={id}
                        onDelete={() => onDelete(id)}
                        {...itemProps}/>
    );
  });
  
  return(
    <div className='selected-heroes'>
      <div className='selected-heroes__container'>
        {heroesSelected}
        <p className='selected-heroes__greting'>Выберите героя</p>
      </div>
    </div>
  )
};

export default SelectedHeroes;
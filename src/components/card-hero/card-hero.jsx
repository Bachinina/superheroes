import React from 'react';

const CardHero = ({id, name, image, onCardClick}) => {  
  return(
    <li className='card-hero' 
        key={id} 
        onClick={onCardClick}>

      <div className='card-hero__img'>
        <img src={image} alt={name}/>
      </div>
      <p className='card-hero__name'>{name}</p>
    </li>
  )
}

export default CardHero;
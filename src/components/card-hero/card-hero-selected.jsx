import React from 'react';

const CardHeroSelected = ({id, name, image, count ,onDelete}) => {  
  
  let className='card-hero__calc';
  
  if(count > 1) {
    className += ' visible';
  }
  
  return(
    <div className='card-hero' 
         key={id}>

      <div className='card-hero__img'>
        <img src={image} alt={name}/>
      </div>
      <div className={className}>{count}</div>
      <button className='card-hero__button-close'
              onClick={onDelete}>
        <span>&#10060;</span>
      </button>
    </div>
  );
};

export default CardHeroSelected;
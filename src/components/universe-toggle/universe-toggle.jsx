import React from 'react';
import { Link } from 'react-router-dom';

const UniverseToggle = (universe) => {

  let classNamesDC = 'toggle';
  let classNamesMarvel = 'toggle';
  
  if(universe.active === 'dc') {
    classNamesDC += ' active';
  }
  if(universe.active === 'marvel') {
    classNamesMarvel += ' active';
  }

  return(
    <div className='toggle__container'>
      <Link className={classNamesDC} 
            to='/dc'>
      </Link>
      <Link className={classNamesMarvel} 
            to='/marvel'>
      </Link>
    </div>
  );
}

export default UniverseToggle;
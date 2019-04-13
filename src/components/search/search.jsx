import React, { Component } from 'react';

export default class Search extends Component {
  
  state = {
    term: ''
  };


  onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  
  render() {
    
    return(
    <input  className='search' 
            type='text' 
            placeholder='Имя героя' 
            value={this.state.term}
            onChange={this.onSearchChange}/>
    );
  }
}
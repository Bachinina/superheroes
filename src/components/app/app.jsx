import React, { Component } from 'react';
import CatalogHeroes from '../catalog-heroes';
import Search from '../search';
import SelectedHeroes from '../selected-heroes';
import UniverseToggle from '../universe-toggle';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  
  state = {
    dc: [
    {
      "id": "am",
      "name": "Аквамен",
      "image": "http://www.ramrus.ru/pic/dc/aquaman.jpg"
    },
    {
      "id": "bm",
      "name": "Бэтмен",
      "image": "http://www.ramrus.ru/pic/dc/batman.jpg"
    },
    {
      "id": "kb",
      "name": "Киборг",
      "image": "http://www.ramrus.ru/pic/dc/cyborg.jpg"
    },
    {
      "id": "fl",
      "name": "Флэш",
      "image": "http://www.ramrus.ru/pic/dc/flash.jpg"
    },
    {
      "id": "gr",
      "name": "Зелёный Фонарь",
      "image": "http://www.ramrus.ru/pic/dc/greenlantern.jpg"
    },
    {
      "id": "sg",
      "name": "Супергёрл",
      "image": "http://www.ramrus.ru/pic/dc/supergirl.jpg"
    },
    {
      "id": "sm",
      "name": "Супермен",
      "image": "http://www.ramrus.ru/pic/dc/superman.jpg"
    },
    {
      "id": "ww",
      "name": "Чудо-женщина",
      "image": "http://www.ramrus.ru/pic/dc/wonderwoman.jpg"
    }
  ],
    marvel: [
    {
      "id": "bc",
      "name": "Чёрная Пантера",
      "image": "http://www.ramrus.ru/pic/marvel/blackpanther.jpg"
    },
    {
      "id": "ca",
      "name": "Капитан Америка",
      "image": "http://www.ramrus.ru/pic/marvel/captainamerica.jpg"
    },
    {
      "id": "mc",
      "name": "Сорвиголова",
      "image": "http://www.ramrus.ru/pic/marvel/daredevil.jpg"
    },
    {
      "id": "ds",
      "name": "Доктор Стрэндж",
      "image": "http://www.ramrus.ru/pic/marvel/doctorstrange.jpg"
    },
    {
      "id": "hk",
      "name": "Халк",
      "image": "http://www.ramrus.ru/pic/marvel/hulk.jpg"
    },
    {
      "id": "im",
      "name": "Железнй Человек",
      "image": "http://www.ramrus.ru/pic/marvel/ironman.jpg"
    },
    {
      "id": "spm",
      "name": "Человек-паук",
      "image": "http://www.ramrus.ru/pic/marvel/spiderman.jpg"
    },
    {
      "id": "tor",
      "name": "Тор",
      "image": "http://www.ramrus.ru/pic/marvel/thor.jpg"
    }
  ],
    
    termDC: '',
    termMarvel: '',
    
    selected: []
  }
  
  catchCards =(id) => {
    const allCards = [...(this.state.dc), ...(this.state.marvel)];
    const index = allCards.findIndex((card) => card.id === id);
    const selectedCard = allCards.slice(index, (index + 1));
    
    this.setState( ({ selected }) => {
      const newArray = [
        ...selected,
        ...selectedCard
      ];
      
      const firstCardIndex = newArray.findIndex((card) => card.id === id);
      
      newArray.forEach((card) => {
        if(card.id === id) {
          
          if(newArray[firstCardIndex].count === undefined) {
            newArray[firstCardIndex].count = 1;
          }
          
          else newArray[firstCardIndex].count ++;
        }
      });
      
      if(newArray[firstCardIndex].count > 1) {
        newArray[firstCardIndex].count --;
        const newPureArray = newArray.splice(0, (newArray.length-1));
        return {
          selected: newPureArray
        };
      }
      
      else return {
        selected: newArray
      };
    });
  };
  
  onDeleteCard = (id) => {
    const allCards = [...(this.state.dc), ...(this.state.marvel)];
    const index = allCards.findIndex((card) => card.id === id);
    const deleteCard = allCards[index];
    deleteCard.count = 0;
    
    const selectedCards = [...(this.state.selected)];
    const indexSel = selectedCards.findIndex((card) => card.id === id);
    const newArray = [ ...selectedCards.slice(0, indexSel), ...selectedCards.slice(indexSel + 1)];
    
    this.setState ( ({ selected }) => {
      return {
        selected: newArray
      };
    }
  )};
  
  onSearchChangeDC = (termDC) => {
    this.setState({ termDC })
  };
  
  onSearchChangeMarvel = (termMarvel) => {
    this.setState({ termMarvel })
  };
  
  search(items, term) {
    if(term.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.name
        .toLowerCase().indexOf(term.toLowerCase()) 
        > -1;
    })
  }
  
  render() {
    
    const { dc, marvel, termDC, termMarvel, selected }=this.state;
    
    const correctItemsDC = this.search(dc, termDC);
    const correctItemsMarvel = this.search(marvel, termMarvel);
    
    return(
    <Router>
      <div className='app'>
        <SelectedHeroes 
          data={selected}
          onDelete={this.onDeleteCard}/>

        <div className='app__selection'>
           <Route path='/' render={() => (
            <Search onSearchChange={this.onSearchChangeDC}/>)} exact
          />
          <Route path='/dc' render={() => (
            <Search onSearchChange={this.onSearchChangeDC}/>)}
          />
          <Route path='/marvel' render={() => (
            <Search onSearchChange={this.onSearchChangeMarvel}/>)}
          />
          
          <Route path='/' render={() => (
            <CatalogHeroes 
            data={dc} 
            onCardClick={this.catchCards}/>)} exact
          />
          <Route path='/dc' render={() => (
            <CatalogHeroes 
            data={correctItemsDC}
            onCardClick={this.catchCards}/>)}
          />
          <Route path='/marvel' render={() => (
            <CatalogHeroes 
            data={correctItemsMarvel}
            onCardClick={this.catchCards}/>)}
          />

          <Route path='/' render={() => (
            <UniverseToggle active='dc'/>)} exact
          />
          <Route path='/dc' render={() => (
            <UniverseToggle active='dc'/>)}
          />
          <Route path='/marvel' render={() => (
            <UniverseToggle active='marvel'/>)}
          />
        </div>
      </div>
    </Router>
  );
}}
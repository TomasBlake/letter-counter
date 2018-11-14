import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state= {
    lettersArray: [],
    charComponents: [],
  }

  changeListenerHandler = (event) => {
    const inputText = event.target.value;    
    const lettersArray = inputText.split('');
    const charComp = lettersArray.map((letter, index) => {
      return {letter: letter, id: index}
    })

    this.setState({
      lettersArray : lettersArray.slice(),
      charComponents: [...charComp]
    })
  }

  deleteCharComponentHandler = (index) => {
    const listOfCharComponents = [...this.state.charComponents];
    listOfCharComponents.splice(index,1);
    const listOfLetters = [...this.state.lettersArray];
    listOfLetters.splice(index,1);
    this.setState({charComponents: [...listOfCharComponents],
                   lettersArray: [...listOfLetters]});
  }

  render() {

    let listOfCharComponents = null;
    listOfCharComponents = (
      this.state.charComponents.map((charComp, index) => {        
        return (
          <CharComponent 
            letter = {charComp.letter}
            key = {charComp.id}
            click={() => this.deleteCharComponentHandler(index)}
           />
        )
      })
    );

    const stringOfLetters = this.state.lettersArray.join('');
   
    return (
     <div className="App">
     <input type='text' onChange = {this.changeListenerHandler} value= {stringOfLetters} />
     <p>{this.state.lettersArray.length}</p>
     <ValidationComponent textLength= {this.state.lettersArray.length} />
     {listOfCharComponents}
     </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Banner from './components/Banner.js'
import Wrapper from './components/Wrapper'
import ImageGroup from './ImageGroup.js'
import ImageCard from './components/ImageCard.js'

let score = 0;
let highScore = 0;

class App extends Component {

  state = {
    ImageGroup,
    score,
    highScore
  }

  handleClick = id => {
    
    //copy of state array
    const ImageGroup = this.state.ImageGroup;

    //filters out the id of the image clicked
    const clickedImage = ImageGroup.filter(image => image.id === id)
    
    //conditional to see if clicked value of clicked item is true, if it is then run game over functions
    if (clickedImage[0].clicked){
        console.log("Correct Guesses: " + score);
        console.log("Best Score: " + highScore);

        score = 0;

        // const newImageGroup = ImageGroup.map(character => (
        //   character.clicked = false
        // ))
        // //setting our original array to our mapped array
        // ImageGroup = newImageGroup;

        for (let i = 0 ; i < ImageGroup.length ; i++){
          ImageGroup[i].clicked = false;
        }

        this.setState({score})
        this.setState({ImageGroup})
    
        //if clicked is false and score is less than 15
    } else if (score < 15){
      
      clickedImage[0].clicked = true
      score++;

      if (score > highScore){
        highScore = score;
        this.setState({highScore})
      }

      ImageGroup.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ImageGroup})
      this.setState({score})
    
      //clicked is false and score is at 15, user wins and game resets
    } else {

      clickedImage[0].clicked = true;

      score = 0;

      highScore = 16;
      this.setState = {highScore}

      // const newImageGroup = ImageGroup.map(character => (
      //   character.clicked = false
      // ))
      // //setting our original array to our mapped array
      // ImageGroup = newImageGroup;

      for (let i = 0 ; i < ImageGroup.length ; i++){
        ImageGroup[i].clicked = false;
      }
      
      ImageGroup.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ImageGroup});
      this.setState({score});
    }

  };

  render() {
    return (
        <Wrapper>
          <Banner score={this.state.score} highScore={this.state.highScore}/>
        
        {this.state.ImageGroup.map(character => (
          <ImageCard
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            path={character.path}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;

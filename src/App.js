import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    topscore: 0,
    rightwrong: ""
  };

  handleShuffle = () => {

		// let friends = this.state.friends;
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });

    // this.setState({ friends });
    console.log(this.state.friends);
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
      topscore: this.state.topscore + 1,
      rightwrong: "Correct!"
    });

    // if (this.state.topscore > this.state.count) { 
    //   this.setState({topscore: this.state.topscore + 1});

    this.handleShuffle();
    };
  

  handleReset = () => {
    // this.setState({topscore: this.state.count});
    this.setState({ 
      count: 0,
      topscore: this.state.topscore,
      rightwrong: "Bork!"
    });
    this.handleShuffle();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
              title="Simpsons Clicky Game"
              score={this.state.count}
              topscore={this.state.topscore}
              rightwrong={this.state.rightwrong}
        />

        <Title>
          Try to click on each character. But don't hit any duplicates, or you'll
          DIE!!!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleIncrement={this.handleIncrement}
                  handleShuffle={this.handleShuffle}
                  handleReset={this.handleReset}
                  id={friend.id}
                  image={friend.image}
                  // clicked={friend.clicked}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;




/* <Container>
  <Row>
    <Column size="md-4 sm-4">title={Nav.title}</Column>)}
    <Column size="md-4 sm-4">
      <h1>You lose!</h1>
    </Column>)}
    <Column size="md-4 sm-4" score={nav.score}>
      <h1>Score: {this.state.count}</h1>
    </Column>)}
  </Row>
</Container>; */
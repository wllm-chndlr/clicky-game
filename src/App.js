import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav>simpsons memory game</Nav>
        {/* <Title>blah</Title> */}
        {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;

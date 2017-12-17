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

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    topscore: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.setState({ topscore: this.state.count + 1});
  };

  handleCardClick = () => {
    const shuffleArray = friend => friends.sort(() => Math.random() - 0.5);
    this.setState({ friends })

  }

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
        <Nav
          title='Clicky Game'
          score={this.state.count}
          topscore={this.state.topscore}
          >        
        </Nav>

        <Title>Click on the cards or whatever</Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleIncrement={this.handleIncrement}
                  shuffleArray={this.shuffleArray}
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  image={friend.image}
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
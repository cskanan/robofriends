import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { users } from "./users";
import DateTimeComp from "./DateTimeComp";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      criteria: ""
    };
  }
  TextChange = event => {
    //console.log(event.target.value);
    this.setState({ criteria: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/usersx")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ friends: users });
      });
    console.log(this.state.friends);
  }

  render() {
    const filterFriends = this.state.friends.filter(robot => {
      return robot.name.includes(this.state.criteria);
    });

    if (filterFriends.length === 0) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <DateTimeComp />
          </div>
          <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox textchange={this.TextChange} />
          </div>
          <div>
            <CardList friends={filterFriends} />
          </div>
        </div>
      );
    }
  }
}
export default App;

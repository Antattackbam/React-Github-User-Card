import axios from 'axios';
import React, { Component } from 'react';
import UserCard from './Cards.js/GithubCard';
import FollowerCard from './Cards.js/FollowerCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  componentDidMount(){
    console.log('c mounted');
    axios
    .get('https://api.github.com/users/antattackbam')
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, user: res.data.login});
    }
    )
    .catch(err => {
      console.log(err)
    }
    )
    axios
    .get('https://api.github.com/users/antattackbam/followers')
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, followers: res.data});
    })
    .catch((err) =>
    console.log(err)
    )
  }

  render() {
    return (
      <div>
        <h2>Github project</h2>
        <h3>User :</h3>
        <UserCard user={this.state.user}/>
        <p>Followers:</p>
        <div>
        {this.state.followers.map(follower => {
            return <FollowerCard key={follower.id} follower={follower}/>
        })
        }
        </div>
       
      </div>
    );
  }
}

export default App;
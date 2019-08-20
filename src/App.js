import React from 'react';
import './App.css';
import axios from 'axios';
const CardList = (props) => (
  <div>
    {props.profiles.map((profile, index) => <Card {...profile} key={profile.id} />)}
  </div>
);

class Card extends React.Component {
deleteProfile = ()=>{
  console.log(this.props.id)
  this.setState({})
}
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img  src={profile.avatar_url} alt="github-img" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          <button onClick={this.deleteProfile}>delete</button>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: "" }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({ userName: "" })
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}


export default App;

import React from 'react';
import './App.css';
import Card from "./Card"
import Form from "./Form"


const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => <Card deleteProfile={props.deleteProfile} {...profile} key={profile.id} />)}
  </div>
);

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  deleteProfile=(id)=>{
   const filteredProfiles = this.state.profiles
    const filter = filteredProfiles.filter((profile)=>{ return profile.id !== id})
    this.setState({profiles:filter})
   }
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} deleteProfile={this.deleteProfile}/>
      </div>
    );
  }
}


export default App;

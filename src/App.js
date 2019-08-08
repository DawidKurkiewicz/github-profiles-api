import React, { useState, useEffect } from 'react';
import './App.css'; // Import css modules stylesheet as styles

class Card extends React.Component {
  render() {
    return (
      <div ClassName="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">name here</div>
          <div className="company">company here</div>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    )
  }
}
export default App;

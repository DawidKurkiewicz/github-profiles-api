import React from 'react';
import "./Card.scss"
class Card extends React.Component {
    render() {
      const profile = this.props;
      return (
        <div className="github-profile">
          <img  src={profile.avatar_url} alt="github-img" />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
            <button className="btn draw-border" onClick={()=>this.props.deleteProfile(profile.id)}>delete</button>
          </div>
        </div>
      );
    }
  }
  export default Card
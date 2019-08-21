import React from 'react';

class Card extends React.Component {
    render() {
      const profile = this.props;
      return (
        <div className="github-profile">
          <img  src={profile.avatar_url} alt="github-img" />
          <div className="info">
            <div className="name">{profile.login}</div>
            <div className="company">{profile.company}</div>
            <button onClick={()=>this.props.deleteProfile(profile.id)}>delete</button>
          </div>
        </div>
      );
    }
  }
  export default Card
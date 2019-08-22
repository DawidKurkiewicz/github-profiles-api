import React from 'react';
import axios from 'axios';
import "./Form.scss"
class Form extends React.Component {
    state = { userName: "" }
    handleSubmit = async (event) => {
      event.preventDefault();
      try {
      const resp = await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      this.props.onSubmit(resp.data)
      this.setState({ userName: "" })
      }catch (error) {
        alert("You pass wrong value to the input, please check your github profile name");
      }
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
          <button className="btn draw-border">Add card</button>
        </form>
      );
    }
  }
  export default Form
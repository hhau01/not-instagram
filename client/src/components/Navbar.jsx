import React, { Component, PropTypes } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currUser: 'morganfreeman',
    };
  }
  render() {
    return (
      <div id="header">
        <div id="navbar">
          <a href="#"><span id="nav-logo" className="brand-name"></span></a>
          <div id="searchbar">
            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            <form method="POST" action="/posts" onSubmit={() => this.props.handleForm(this.state.currUser, this.state.value)}>
              <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} name="url" type="text" placeholder="Add New Post"></input>
            </form>
          </div>
          <div id="iconbar">
            <a href="#"><span className="icon" id="explore"></span></a>
            <a href="#"><span className="icon" id="likes"></span></a>
            <a href="#"><span className="icon" id="me"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  handleForm: PropTypes.func,
};

export default Navbar;

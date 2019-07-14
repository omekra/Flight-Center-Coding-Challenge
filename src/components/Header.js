import React, { Component } from "react";

class Header extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="header">
        <header>
          <h4>Select a Tour</h4>
          <p className="small">
            <span>{data.length} tours</span> found
          </p>
        </header>
      </div>
    );
  }
}

export default Header;

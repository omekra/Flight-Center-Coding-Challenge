import React, { Component } from "react";

class Itinerary extends Component {
  render() {
    // itinerary passed as props from Destinations component
    const { itinerary } = this.props;

    // Breaking the Long Text into inline Elements
    const text = itinerary;
    const short = text.slice(0, 5);
    const long = text.slice(5);

    function getLength() {
      return (
        <React.Fragment>
          <span className="short-text">{short}</span>
          <span className="long-text">{long}</span>
          <span className="text-dots">...</span>
          <a
            href="/"
            className="show-more-button"
            data-more="0"
            onClick={handleClick}
          >
            {" "}
            See More
          </a>
        </React.Fragment>
      );
    }

    function handleClick(e) {
      e.preventDefault();
      // If text is shown less, then show complete
      if (e.currentTarget.dataset.more == 0) {
        e.currentTarget.setAttribute("data-more", 1);
        e.currentTarget.style.display = "block";
        e.currentTarget.innerHTML = " See Less";

        e.currentTarget.previousSibling.style.display = "none";
        e.currentTarget.previousSibling.previousSibling.style.display =
          "inline";
      }
      // If text is shown complete, then show less
      else if (e.currentTarget.dataset.more == 1) {
        e.currentTarget.setAttribute("data-more", 0);
        e.currentTarget.style.display = "inline";
        e.currentTarget.innerHTML = " See More";

        e.currentTarget.previousSibling.style.display = "inline";
        e.currentTarget.previousSibling.previousSibling.style.display = "none";
      }
    }

    return (
      <div className="row">
        <div className="col-1">
          <span className="pin" />
        </div>
        <div className="col-10 pl-0">{getLength()}</div>
      </div>
    );
  }
}

export default Itinerary;

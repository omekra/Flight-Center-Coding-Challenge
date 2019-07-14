import React, { Component } from "react";
import Itinerary from "./Itinerary";

class Destinations extends Component {
  render() {
    const { data } = this.props;

    const destination = data.map((dest, index) => {
      // Get Ratings
      const ratings = dest.rating;
      document.addEventListener("DOMContentLoaded", getRatings);
      function getRatings() {
        if (ratings === 5) {
          return <span className="star-rating" />;
        } else if (ratings === 4) {
          return <span className="star-rating" style={{ paddingLeft: 65 }} />;
        } else {
          return (
            <React.Fragment>
              <span className="star-rating" style={{ paddingLeft: 65 }} />
              <span className="half-star-rating" />
            </React.Fragment>
          );
        }
      }

      // Get Itineraries
      const itinerary = dest.itinerary.map(places =>
        places
          .split("  ")
          .map((place, index) => (
            <React.Fragment key={index}>{place}, </React.Fragment>
          ))
      );

      return (
        <div key={index} className="col-sm px-0 mb-3">
          <div className="card shadow-sm" style={{ width: "19rem" }}>
            <img className="card-img-top" src={dest.image} alt="Card cap" />
            <div className="card-img-overlay">
              {dest.operator.map((item, index) => {
                return <img key={index} src={item.logo} alt={item.name} />;
              })}
            </div>
            <div className="card-body pb-1">
              <p className="card-title mb-1">{dest.tour_name}</p>
              <p className="card-text">{getRatings()}</p>

              <div className="stars-outer">
                <div className="star-inner" />
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item small">
                <span className="calendar" />
                {dest.date_start} - {dest.date_end}
              </li>
              <li className="list-group-item small">
                <span className="clock" />
                {dest.duration} days
              </li>
              <li className="list-group-item small">
                <Itinerary itinerary={itinerary} />
              </li>
            </ul>
            <div className="card-footer bg-transparent">
              <hr />
              <div className="small float-left text-muted">
                from{" "}
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Prices are per person and in Australian Dollars."
                >
                  <span className="info" />
                </a>
                <br />
                <h5>
                  <span className="dollar text-muted">$</span>
                  <strong>{dest.price}</strong>
                </h5>
              </div>
              <a
                href="/"
                className="call-to-action btn btn-primary btn-sm float-right text-uppercase shadow-sm"
              >
                View Tour
              </a>
            </div>
          </div>
        </div>
      );
    });

    return <React.Fragment>{destination}</React.Fragment>;
  }
}

export default Destinations;

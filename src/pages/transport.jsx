import { useState } from "react";

function Transport({ onBack }) {
  const [selectedRoute, setSelectedRoute] = useState("Route 1");

  const routes = {
    "Route 1": {
      bus: "NGY-101",
      driver: "Mr. Rajesh",
      departure: "07:30 AM",
      arrival: "08:25 AM",
      stops: [
        "Bhopal Railway Station",
        "Board Office",
        "MP Nagar",
        "Kolar Road",
        "LNCT University",
      ],
    },

    "Route 2": {
      bus: "NGY-102",
      driver: "Mr. Amit",
      departure: "07:45 AM",
      arrival: "08:35 AM",
      stops: [
        "Lalghati",
        "New Market",
        "Habibganj",
        "Bawadia Kalan",
        "LNCT University",
      ],
    },

    "Route 3": {
      bus: "NGY-103",
      driver: "Mr. Suresh",
      departure: "08:00 AM",
      arrival: "08:45 AM",
      stops: [
        "Bairagarh",
        "Sehore Naka",
        "Misrod",
        "Mandideep Road",
        "LNCT University",
      ],
    },
  };

  const currentRoute = routes[selectedRoute];

  return (
    <div className="feature-page">

      {/* Back */}
      <button
        className="feature-back"
        onClick={onBack}
      >
        ← 
      </button>

      {/* Header */}
      <div className="feature-header">

        <span>🚌</span>

        <div>
          <h1>Campus Transport</h1>

          <p>
            Check bus routes, timings and pickup points.
          </p>
        </div>

      </div>

      {/* Route Selector */}
      <div className="transport-route-tabs">

        {Object.keys(routes).map((route) => (

          <button
            key={route}
            className={
              selectedRoute === route
                ? "active-route"
                : ""
            }
            onClick={() => setSelectedRoute(route)}
          >
            🚌 {route}
          </button>

        ))}

      </div>

      {/* Bus Overview */}
      <div className="transport-overview">

        <div className="transport-bus-icon">
          🚌
        </div>

        <div className="transport-bus-info">

          <span>BUS NUMBER</span>

          <h2>
            {currentRoute.bus}
          </h2>

          <p>
            {selectedRoute}
          </p>

        </div>

        <div className="transport-status">
          <span className="status-dot"></span>
          Active
        </div>

      </div>

      {/* Timing Cards */}
      <div className="transport-info-grid">

        <div className="transport-info-card">

          <span className="transport-info-icon">
            🕐
          </span>

          <div>
            <small>Departure</small>
            <strong>
              {currentRoute.departure}
            </strong>
          </div>

        </div>

        <div className="transport-info-card">

          <span className="transport-info-icon">
            🏁
          </span>

          <div>
            <small>Arrival</small>
            <strong>
              {currentRoute.arrival}
            </strong>
          </div>

        </div>

        <div className="transport-info-card">

          <span className="transport-info-icon">
            👨‍✈️
          </span>

          <div>
            <small>Driver</small>
            <strong>
              {currentRoute.driver}
            </strong>
          </div>

        </div>

      </div>

      {/* Route Timeline */}
      <div className="transport-route-card">

        <div className="transport-card-header">

          <div>
            <h2>Route Stops</h2>

            <p>
              {currentRoute.stops.length} pickup points
            </p>
          </div>

          <span>
            📍
          </span>

        </div>

        <div className="transport-stops">

          {currentRoute.stops.map(
            (stop, index) => (

              <div
                className="transport-stop"
                key={index}
              >

                <div className="stop-number">
                  {index + 1}
                </div>

                <div className="stop-line"></div>

                <div className="stop-info">

                  <strong>
                    {stop}
                  </strong>

                  <span>
                    {index === 0
                      ? "Starting Point"
                      : index === currentRoute.stops.length - 1
                      ? "University"
                      : "Pickup Point"}
                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Transport;
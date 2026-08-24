function Navigation({ onBack }) {
  return (
    <div className="feature-page">

      <button className="feature-back" onClick={onBack}>
        ← 
      </button>

      <div className="feature-header">
        <span>🧭</span>
        <div>
          <h1>Smart Navigation</h1>
          <p>Find your way around campus easily.</p>
        </div>
      </div>

      <div className="navigation-layout">

        <div className="map-card">
          <div className="map-placeholder">
            <div className="map-pin"></div>
            <h2>Campus Map</h2>
            <p>Interactive campus navigation will appear here.</p>
          </div>
        </div>

        <div className="places-card">
          <h2>Popular Places</h2>

          <button>
            🏫
            <div>
              <strong>Main Building</strong>
              <span>Academic Block</span>
            </div>
          </button>

          <button>
            📚
            <div>
              <strong>Central Library</strong>
              <span>Library Block</span>
            </div>
          </button>

          <button>
            🧪
            <div>
              <strong>Computer Lab</strong>
              <span>Lab Block</span>
            </div>
          </button>

          <button>
            🍽️
            <div>
              <strong>Cafeteria</strong>
              <span>Student Zone</span>
            </div>
          </button>

        </div>

      </div>

    </div>
  );
}

export default Navigation;
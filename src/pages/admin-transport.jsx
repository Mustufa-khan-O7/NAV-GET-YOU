import { useState } from "react";

function AdminTransport({ onBack }) {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const [buses, setBuses] = useState([
    {
      id: 1,
      busNo: "BUS-01",
      route: "Main Gate → Block A → Hostel",
      driver: "Rahul Sharma",
      phone: "9876543210",
      departure: "08:00 AM",
      arrival: "08:30 AM",
      stops: 6,
      status: "Active",
    },
    {
      id: 2,
      busNo: "BUS-02",
      route: "Main Gate → Block B → Girls Hostel",
      driver: "Amit Verma",
      phone: "9876543211",
      departure: "08:15 AM",
      arrival: "08:45 AM",
      stops: 5,
      status: "Active",
    },
    {
      id: 3,
      busNo: "BUS-03",
      route: "Railway Station → College",
      driver: "Suresh Patel",
      phone: "9876543212",
      departure: "09:00 AM",
      arrival: "09:40 AM",
      stops: 8,
      status: "Delayed",
    },
    {
      id: 4,
      busNo: "BUS-04",
      route: "City Center → Main Gate",
      driver: "Vijay Singh",
      phone: "9876543213",
      departure: "10:00 AM",
      arrival: "10:35 AM",
      stops: 7,
      status: "Maintenance",
    },
    {
      id: 5,
      busNo: "BUS-05",
      route: "Hostel → Academic Block",
      driver: "Arjun Khan",
      phone: "9876543214",
      departure: "10:30 AM",
      arrival: "10:50 AM",
      stops: 4,
      status: "Active",
    },
  ]);


  /* =========================
     STATISTICS
  ========================= */

  const totalBuses = buses.length;

  const activeBuses = buses.filter(
    (bus) => bus.status === "Active"
  ).length;

  const delayedBuses = buses.filter(
    (bus) => bus.status === "Delayed"
  ).length;

  const maintenanceBuses = buses.filter(
    (bus) => bus.status === "Maintenance"
  ).length;


  /* =========================
     SEARCH + FILTER
  ========================= */

  const filteredBuses = buses.filter((bus) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      bus.busNo.toLowerCase().includes(searchText) ||
      bus.route.toLowerCase().includes(searchText) ||
      bus.driver.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      bus.status === statusFilter;

    return matchesSearch && matchesStatus;
  });


  /* =========================
     DELETE BUS
  ========================= */

  const deleteBus = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to remove this bus?"
    );

    if (!confirmDelete) return;

    setBuses(
      buses.filter((bus) => bus.id !== id)
    );
  };


  /* =========================
     CHANGE STATUS
  ========================= */

  const changeStatus = (id, newStatus) => {

    setBuses(
      buses.map((bus) =>
        bus.id === id
          ? { ...bus, status: newStatus }
          : bus
      )
    );
  };


  /* =========================
     ADD BUS
  ========================= */

  const handleAddBus = (e) => {

    e.preventDefault();

    const form = e.target;

    const newBus = {
      id: Date.now(),
      busNo: form.busNo.value,
      route: form.route.value,
      driver: form.driver.value,
      phone: form.phone.value,
      departure: form.departure.value,
      arrival: form.arrival.value,
      stops: Number(form.stops.value),
      status: form.status.value,
    };

    setBuses([...buses, newBus]);

    setShowAddForm(false);

    form.reset();
  };


  return (

    <div className="admin-transport-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="transport-page-header">

        <button
          className="transport-back-btn"
          onClick={onBack}
        >
          ←
        </button>

        <div>
          <h1>Transport Management</h1>

          <p>
            Manage campus buses, routes and transport services
          </p>
        </div>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="transport-stats">

        <div className="transport-stat-card">

          <div className="transport-stat-icon">
            🚌
          </div>

          <div>
            <span>Total Buses</span>
            <strong>{totalBuses}</strong>
          </div>

        </div>


        <div className="transport-stat-card">

          <div className="transport-stat-icon">
            🟢
          </div>

          <div>
            <span>Active Buses</span>
            <strong>{activeBuses}</strong>
          </div>

        </div>


        <div className="transport-stat-card">

          <div className="transport-stat-icon">
            🟡
          </div>

          <div>
            <span>Delayed</span>
            <strong>{delayedBuses}</strong>
          </div>

        </div>


        <div className="transport-stat-card">

          <div className="transport-stat-icon">
            🔧
          </div>

          <div>
            <span>Maintenance</span>
            <strong>{maintenanceBuses}</strong>
          </div>

        </div>

      </div>


      {/* =========================
          TOOLBAR
      ========================= */}

      <div className="transport-toolbar">

        <div className="transport-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search bus, route or driver..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <select
          className="transport-filter"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Delayed">
            Delayed
          </option>

          <option value="Maintenance">
            Maintenance
          </option>

        </select>


        <button
          className="add-bus-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Add Bus
        </button>

      </div>


      {/* =========================
          BUS LIST
      ========================= */}

      <div className="transport-list">

        {filteredBuses.length === 0 ? (

          <div className="no-buses">

            <div>🚌</div>

            <h2>No buses found</h2>

            <p>
              Try changing your search or filter.
            </p>

          </div>

        ) : (

          filteredBuses.map((bus) => (

            <div
              className="transport-card"
              key={bus.id}
            >

              {/* BUS ICON */}

              <div className="bus-icon">
                🚌
              </div>


              {/* MAIN INFO */}

              <div className="bus-main">

                <div className="bus-title-row">

                  <span className="bus-number">
                    {bus.busNo}
                  </span>

                  <span
                    className={`bus-status ${
                      bus.status === "Active"
                        ? "bus-active"
                        : bus.status === "Delayed"
                        ? "bus-delayed"
                        : "bus-maintenance"
                    }`}
                  >
                    {bus.status}
                  </span>

                </div>


                <h2>
                  {bus.route}
                </h2>


                <div className="bus-meta">

                  <span>
                    👨‍✈️ {bus.driver}
                  </span>

                  <span>
                    📞 {bus.phone}
                  </span>

                  <span>
                    📍 {bus.stops} Stops
                  </span>

                </div>

              </div>


              {/* TIMING */}

              <div className="bus-timing">

                <div>
                  <small>Departure</small>
                  <strong>{bus.departure}</strong>
                </div>

                <span>→</span>

                <div>
                  <small>Arrival</small>
                  <strong>{bus.arrival}</strong>
                </div>

              </div>


              {/* ACTIONS */}

              <div className="bus-actions">

                <button
                  className="view-bus-btn"
                  onClick={() =>
                    setSelectedBus(bus)
                  }
                >
                  View
                </button>


                <select
                  className="bus-status-select"
                  value={bus.status}
                  onChange={(e) =>
                    changeStatus(
                      bus.id,
                      e.target.value
                    )
                  }
                >

                  <option value="Active">
                    Active
                  </option>

                  <option value="Delayed">
                    Delayed
                  </option>

                  <option value="Maintenance">
                    Maintenance
                  </option>

                </select>


                <button
                  className="delete-bus-btn"
                  onClick={() =>
                    deleteBus(bus.id)
                  }
                >
                  🗑
                </button>

              </div>

            </div>

          ))

        )}

      </div>


      {/* =========================
          VIEW BUS MODAL
      ========================= */}

      {selectedBus && (

        <div className="transport-modal-overlay">

          <div className="transport-modal">

            <div className="transport-modal-header">

              <div>
                <span>
                  {selectedBus.busNo}
                </span>

                <h2>
                  Bus Details
                </h2>
              </div>

              <button
                className="close-transport-modal"
                onClick={() =>
                  setSelectedBus(null)
                }
              >
                ×
              </button>

            </div>


            <div className="bus-detail-grid">

              <div>
                <label>Bus Number</label>
                <strong>
                  {selectedBus.busNo}
                </strong>
              </div>

              <div>
                <label>Driver</label>
                <strong>
                  {selectedBus.driver}
                </strong>
              </div>

              <div>
                <label>Phone</label>
                <strong>
                  {selectedBus.phone}
                </strong>
              </div>

              <div>
                <label>Status</label>
                <strong>
                  {selectedBus.status}
                </strong>
              </div>

              <div>
                <label>Departure</label>
                <strong>
                  {selectedBus.departure}
                </strong>
              </div>

              <div>
                <label>Arrival</label>
                <strong>
                  {selectedBus.arrival}
                </strong>
              </div>

              <div>
                <label>Total Stops</label>
                <strong>
                  {selectedBus.stops}
                </strong>
              </div>

            </div>


            <div className="bus-route-box">

              <label>Route</label>

              <p>
                {selectedBus.route}
              </p>

            </div>


            <div className="transport-modal-actions">

              <button
                className="modal-close-btn"
                onClick={() =>
                  setSelectedBus(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =========================
          ADD BUS MODAL
      ========================= */}

      {showAddForm && (

        <div className="transport-modal-overlay">

          <div className="transport-modal">

            <div className="transport-modal-header">

              <div>

                <span>
                  TRANSPORT
                </span>

                <h2>
                  Add New Bus
                </h2>

              </div>

              <button
                className="close-transport-modal"
                onClick={() =>
                  setShowAddForm(false)
                }
              >
                ×
              </button>

            </div>


            <form onSubmit={handleAddBus}>

              <div className="transport-form-grid">


                <div className="transport-form-group">

                  <label>
                    Bus Number
                  </label>

                  <input
                    name="busNo"
                    placeholder="BUS-06"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Driver Name
                  </label>

                  <input
                    name="driver"
                    placeholder="Driver name"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Driver Phone
                  </label>

                  <input
                    name="phone"
                    placeholder="9876543210"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Number of Stops
                  </label>

                  <input
                    name="stops"
                    type="number"
                    min="1"
                    placeholder="6"
                    required
                  />

                </div>


                <div className="transport-form-group full">

                  <label>
                    Route
                  </label>

                  <input
                    name="route"
                    placeholder="Main Gate → Block A → Hostel"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Departure
                  </label>

                  <input
                    name="departure"
                    placeholder="08:00 AM"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Arrival
                  </label>

                  <input
                    name="arrival"
                    placeholder="08:30 AM"
                    required
                  />

                </div>


                <div className="transport-form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    defaultValue="Active"
                  >

                    <option value="Active">
                      Active
                    </option>

                    <option value="Delayed">
                      Delayed
                    </option>

                    <option value="Maintenance">
                      Maintenance
                    </option>

                  </select>

                </div>

              </div>


              <div className="transport-modal-actions">

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() =>
                    setShowAddForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="modal-save-btn"
                >
                  Add Bus
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminTransport;
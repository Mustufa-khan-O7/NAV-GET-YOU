import { useEffect, useMemo, useState } from "react";
import campusMap from "../assets/campus-map.png";

/* =========================================================
   CAMPUS LOCATIONS
========================================================= */

const locations = [
  {
    id: "bus",
    name: "Bus Stand",
    type: "Transport",
    icon: "🚌",
    lat: 23.251354,
    lng: 77.523429,
    x: 14.5,
    y: 10,
  },

  {
    id: "temple",
    name: "Temple",
    type: "Temple",
    icon: "🛕",
    lat: 23.25145,
    lng: 77.523796,
    x: 21,
    y: 5,
  },

  {
    id: "auditorium",
    name: "Aryabhatta Auditorium",
    type: "Auditorium",
    icon: "🏛️",
    lat: 23.25100924702797,
    lng: 77.5231882106773,
    x: 9,
    y: 32,
  },

  {
    id: "main-building",
    name: "Main Building",
    type: "Academic Block",
    icon: "🏫",
    lat: 23.251201962280664,
    lng: 77.52475042704467,
    x: 36,
    y: 17,
  },

  {
    id: "cv-raman",
    name: "C.V. Raman Block",
    type: "Academic Block",
    icon: "🏫",
    lat: 23.25057425103356,
    lng: 77.52484611439085,
    x: 37,
    y: 39,
  },

  {
    id: "workshop",
    name: "Workshop",
    type: "Workshop",
    icon: "🔧",
    lat: 23.250056000657608,
    lng: 77.5252414241414,
    x: 39,
    y: 55,
  },

  {
    id: "it",
    name: "IT Department",
    type: "IT Department",
    icon: "💻",
    lat: 23.250263700590864,
    lng: 77.5258663732589,
    x: 51,
    y: 43,
  },

  {
    id: "ground",
    name: "Ground",
    type: "Sports Ground",
    icon: "⚽",
    lat: 23.249754984186264,
    lng: 77.52630622247617,
    x: 56,
    y: 67,
  },

  {
    id: "canteen",
    name: "Canteen",
    type: "Student Zone",
    icon: "🍽️",
    lat: 23.25041051787611,
    lng: 77.52680986148164,
    x: 64,
    y: 40,
  },

  {
    id: "s-building",
    name: "S Building",
    type: "Academic Block",
    icon: "🏢",
    lat: 23.249659823507695,
    lng: 77.52782491944629,
    x: 76,
    y: 58,
  },

  {
    id: "pharmacy",
    name: "Pharmacy Building",
    type: "Pharmacy",
    icon: "💊",
    lat: 23.24919665153386,
    lng: 77.52744914365228,
    x: 73,
    y: 82,
  },

  {
    id: "mca",
    name: "MCA Building",
    type: "MCA",
    icon: "💻",
    lat: 23.249888256308157,
    lng: 77.52831781634224,
    x: 82,
    y: 58,
  },

  {
    id: "agriculture",
    name: "Agriculture Building",
    type: "Agriculture",
    icon: "🌾",
    lat: 23.249880798040117,
    lng: 77.52862348148251,
    x: 89,
    y: 58,
  },
];

/* =========================================================
   MAIN GATE
========================================================= */

const mainGate = {
  id: "gate",
  name: "Main Gate",
  lat: 23.251519,
  lng: 77.523513,
  x: 17.5,
  y: 7,
};

/* =========================================================
   MAP GPS BOUNDS
========================================================= */

const mapBounds = {
  north: 23.2518,
  south: 23.2490,
  west: 77.5228,
  east: 77.5290,
};

/* =========================================================
   GPS → MAP POSITION
========================================================= */

function gpsToMapPosition(lat, lng) {
  const x =
    ((lng - mapBounds.west) /
      (mapBounds.east - mapBounds.west)) *
    100;

  const y =
    ((mapBounds.north - lat) /
      (mapBounds.north - mapBounds.south)) *
    100;

  return { x, y };
}

/* =========================================================
   ROAD NETWORK
   Based on the RED ROAD + ARROWS you marked
=========================================================

   IMPORTANT:
   These are road CENTER points.
   Dijkstra will choose the shortest connected path.
========================================================= */

const roadNodes = {
  gate: [17.5, 7],

  /* Gate → Bus / Temple area */
  gateBus: [16.8, 8.8],
  bus: [14.5, 10],

  gateTemple: [19.0, 6.5],
  temple: [21, 5],

  /* Main road going toward Main Building */
  r1: [20, 7],
  r2: [27, 4],
  r3: [33, 2],
  r4: [39, 1.5],
  r5: [40.5, 7],
  r6: [41.5, 14],
  r7: [42.5, 21],
  r8: [43.5, 26],

  /* Main Building connection */
  mainBuilding: [36, 17],

  /* C.V. Raman / Workshop side */
  cv1: [39, 30],
  cv2: [39.5, 35],
  cv3: [40.5, 40],

  cvRaman: [37, 39],

  workshopRoad: [41, 48],
  workshop: [39, 55],

  /* IT side */
  it1: [45, 47],
  it2: [49, 45],
  it: [51, 43],

  /* Canteen */
  canteen1: [55, 42],
  canteen2: [59, 39],
  canteen: [64, 40],

  /* Central / Ground junction */
  center: [59, 48],
  ground1: [58, 55],
  ground: [56, 67],

  /* East road */
  east1: [64, 49],
  east2: [70, 48],
  east3: [76, 50],
  east4: [82, 52],
  east5: [89, 55],
  east6: [92, 59],

  /* S Building */
  s1: [88, 63],
  s2: [82, 66],
  s3: [76, 69],
  sBuilding: [76, 58],

  /* MCA */
  mcaRoad: [82, 58],
  mca: [82, 58],

  /* Agriculture */
  agriculture: [89, 58],

  /* Pharmacy */
  pharmacy1: [86, 69],
  pharmacy2: [81, 74],
  pharmacy3: [77, 77],
  pharmacy4: [73, 82],
  pharmacy: [73, 82],

  /* Auditorium */
  auditorium1: [15, 31],
  auditorium2: [10, 32],
  auditorium: [9, 32],
};

/* =========================================================
   ROAD CONNECTIONS

   Every connection means:
   "A person can walk between these two points."

   Dijkstra uses these connections to find shortest route.
========================================================= */

const roadEdges = [
  /* ---------------- Gate → Bus ---------------- */
  ["gate", "gateBus"],
  ["gateBus", "bus"],

  /* ---------------- Gate → Temple ---------------- */
  ["gate", "gateTemple"],
  ["gateTemple", "temple"],

  /* ---------------- Gate → Main Road ---------------- */
  ["gate", "r1"],
  ["r1", "r2"],
  ["r2", "r3"],
  ["r3", "r4"],
  ["r4", "r5"],
  ["r5", "r6"],
  ["r6", "r7"],
  ["r7", "r8"],

  /* ---------------- Main Building ---------------- */
  ["r5", "mainBuilding"],
  ["mainBuilding", "r8"],

  /* ---------------- Main Road → CV Raman ---------------- */
  ["r8", "cv1"],
  ["cv1", "cv2"],
  ["cv2", "cv3"],
  ["cv3", "cvRaman"],

  /* ---------------- CV Raman → Workshop ---------------- */
  ["cv3", "workshopRoad"],
  ["workshopRoad", "workshop"],

  /* ---------------- Main Road → IT ---------------- */
  ["cv3", "it1"],
  ["it1", "it2"],
  ["it2", "it"],

  /* ---------------- IT → Canteen ---------------- */
  ["it", "canteen1"],
  ["canteen1", "canteen2"],
  ["canteen2", "canteen"],

  /* ---------------- Canteen → Central ---------------- */
  ["canteen", "center"],

  /* ---------------- Central → Ground ---------------- */
  ["center", "ground1"],
  ["ground1", "ground"],

  /* ---------------- Central → East ---------------- */
  ["center", "east1"],
  ["east1", "east2"],
  ["east2", "east3"],
  ["east3", "east4"],
  ["east4", "east5"],
  ["east5", "east6"],

  /* ---------------- East → S Building ---------------- */
  ["east3", "sBuilding"],

  /* ---------------- S → MCA ---------------- */
  ["sBuilding", "mca"],

  /* ---------------- MCA → Agriculture ---------------- */
  ["mca", "agriculture"],

  /* ---------------- East → Pharmacy ---------------- */
  ["east6", "pharmacy1"],
  ["pharmacy1", "pharmacy2"],
  ["pharmacy2", "pharmacy3"],
  ["pharmacy3", "pharmacy4"],
  ["pharmacy4", "pharmacy"],

  /* ---------------- Ground → Pharmacy ---------------- */
  ["ground", "pharmacy2"],

  /* ---------------- Main Road → Auditorium ---------------- */
  ["r1", "auditorium1"],
  ["auditorium1", "auditorium2"],
  ["auditorium2", "auditorium"],
];

/* =========================================================
   DESTINATION → ROAD NODE
========================================================= */

const destinationRoadNode = {
  bus: "bus",
  temple: "temple",
  auditorium: "auditorium",
  "main-building": "mainBuilding",
  "cv-raman": "cvRaman",
  workshop: "workshop",
  it: "it",
  ground: "ground",
  canteen: "canteen",
  "s-building": "sBuilding",
  pharmacy: "pharmacy",
  mca: "mca",
  agriculture: "agriculture",
};

/* =========================================================
   DISTANCE BETWEEN TWO MAP POINTS
========================================================= */

function pointDistance(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];

  return Math.sqrt(dx * dx + dy * dy);
}

/* =========================================================
   BUILD GRAPH
========================================================= */

function createGraph() {
  const graph = {};

  Object.keys(roadNodes).forEach((node) => {
    graph[node] = [];
  });

  roadEdges.forEach(([a, b]) => {
    const distance = pointDistance(
      roadNodes[a],
      roadNodes[b]
    );

    graph[a].push({
      node: b,
      distance,
    });

    graph[b].push({
      node: a,
      distance,
    });
  });

  return graph;
}

const graph = createGraph();

/* =========================================================
   DIJKSTRA SHORTEST PATH
========================================================= */

function findShortestPath(startNode, endNode) {
  const distances = {};
  const previous = {};
  const visited = new Set();

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[startNode] = 0;

  while (visited.size < Object.keys(graph).length) {
    let current = null;
    let shortestDistance = Infinity;

    Object.keys(distances).forEach((node) => {
      if (
        !visited.has(node) &&
        distances[node] < shortestDistance
      ) {
        shortestDistance = distances[node];
        current = node;
      }
    });

    if (current === null) break;

    if (current === endNode) break;

    visited.add(current);

    graph[current].forEach((edge) => {
      const newDistance =
        distances[current] + edge.distance;

      if (
        newDistance <
        distances[edge.node]
      ) {
        distances[edge.node] = newDistance;
        previous[edge.node] = current;
      }
    });
  }

  const path = [];

  let current = endNode;

  while (current !== null) {
    path.unshift(current);

    if (current === startNode) {
      break;
    }

    current = previous[current];
  }

  if (path[0] !== startNode) {
    return [];
  }

  return path;
}

/* =========================================================
   FIND NEAREST ROAD NODE
========================================================= */

function findNearestRoadNode(position) {
  if (!position) return "gate";

  let nearest = "gate";
  let minDistance = Infinity;

  Object.entries(roadNodes).forEach(
    ([nodeName, point]) => {
      const distance = pointDistance(
        [position.x, position.y],
        point
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearest = nodeName;
      }
    }
  );

  return nearest;
}

/* =========================================================
   REMOVE DUPLICATE POINTS
========================================================= */

function removeDuplicatePoints(points) {
  return points.filter((point, index) => {
    if (index === 0) return true;

    const previous = points[index - 1];

    return (
      point[0] !== previous[0] ||
      point[1] !== previous[1]
    );
  });
}

/* =========================================================
   GET ROUTE

   GPS available:
   GPS → nearest road → shortest road → destination

   GPS unavailable:
   Main Gate → shortest road → destination
========================================================= */

function getRoute(
  destinationId,
  userMapPosition
) {
  const destinationNode =
    destinationRoadNode[destinationId];

  if (!destinationNode) return [];

  const startNode =
    userMapPosition
      ? findNearestRoadNode(
          userMapPosition
        )
      : "gate";

  const path = findShortestPath(
    startNode,
    destinationNode
  );

  if (!path.length) return [];

  let points = [];

  /* Current GPS position */
  if (userMapPosition) {
    points.push([
      userMapPosition.x,
      userMapPosition.y,
    ]);
  }

  /* Road points */
  path.forEach((node) => {
    points.push(roadNodes[node]);
  });

  return removeDuplicatePoints(points);
}

/* =========================================================
   REAL GPS DISTANCE
========================================================= */

function getGPSDistance(
  lat1,
  lng1,
  lat2,
  lng2
) {
  const R = 6371000;

  const p1 =
    (lat1 * Math.PI) / 180;

  const p2 =
    (lat2 * Math.PI) / 180;

  const dp =
    ((lat2 - lat1) * Math.PI) /
    180;

  const dl =
    ((lng2 - lng1) * Math.PI) /
    180;

  const a =
    Math.sin(dp / 2) ** 2 +
    Math.cos(p1) *
      Math.cos(p2) *
      Math.sin(dl / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return R * c;
}

/* =========================================================
   DISTANCE FROM USER / GATE
========================================================= */

function getDistance(
  destination,
  userLocation
) {
  if (
    userLocation
  ) {
    return Math.round(
      getGPSDistance(
        userLocation.lat,
        userLocation.lng,
        destination.lat,
        destination.lng
      )
    );
  }

  return Math.round(
    getGPSDistance(
      mainGate.lat,
      mainGate.lng,
      destination.lat,
      destination.lng
    )
  );
}

/* =========================================================
   DIRECTION
========================================================= */

function getDirection(
  destination,
  userLocation
) {
  const startLat =
    userLocation?.lat ??
    mainGate.lat;

  const startLng =
    userLocation?.lng ??
    mainGate.lng;

  const dLat =
    destination.lat -
    startLat;

  const dLng =
    destination.lng -
    startLng;

  if (
    Math.abs(dLng) >
    Math.abs(dLat) * 1.5
  ) {
    return dLng > 0
      ? "Go Right"
      : "Go Left";
  }

  if (
    Math.abs(dLat) >
    Math.abs(dLng) * 1.5
  ) {
    return dLat > 0
      ? "Go Straight"
      : "Go Back";
  }

  if (
    dLat > 0 &&
    dLng > 0
  ) {
    return "Go Right & Straight";
  }

  if (
    dLat > 0 &&
    dLng < 0
  ) {
    return "Go Left & Straight";
  }

  return "Continue Ahead";
}

/* =========================================================
   NAVIGATION COMPONENT
========================================================= */

function Navigation({ onBack }) {
  const [selected, setSelected] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [userLocation, setUserLocation] =
    useState(null);

  const [locationError, setLocationError] =
    useState("");

  const [isLocating, setIsLocating] =
    useState(false);

  const [locationEnabled, setLocationEnabled] =
    useState(false);

  /* =======================================================
     START LIVE LOCATION
  ======================================================= */

  const startLocationTracking =
    () => {
      if (!navigator.geolocation) {
        setLocationError(
          "Location is not supported on this device."
        );
        return;
      }

      setIsLocating(true);
      setLocationError("");

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat:
              position.coords.latitude,
            lng:
              position.coords.longitude,
            accuracy:
              position.coords.accuracy,
          });

          setLocationEnabled(true);
          setIsLocating(false);
          setLocationError("");
        },

        (error) => {
          setIsLocating(false);

          if (
            error.code ===
            error.PERMISSION_DENIED
          ) {
            setLocationError(
              "Location permission denied. Please allow location from browser settings."
            );
          } else if (
            error.code ===
            error.POSITION_UNAVAILABLE
          ) {
            setLocationError(
              "Your location is currently unavailable."
            );
          } else {
            setLocationError(
              "Unable to get your location."
            );
          }
        },

        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 15000,
        }
      );
    };

  /* =======================================================
     LIVE GPS WATCH
  ======================================================= */

  useEffect(() => {
    if (!locationEnabled) return;

    if (!navigator.geolocation) return;

    const watchId =
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            lat:
              position.coords.latitude,
            lng:
              position.coords.longitude,
            accuracy:
              position.coords.accuracy,
          });

          setLocationError("");
        },

        () => {
          setLocationError(
            "Unable to update live location."
          );
        },

        {
          enableHighAccuracy: true,
          maximumAge: 3000,
          timeout: 10000,
        }
      );

    return () => {
      navigator.geolocation.clearWatch(
        watchId
      );
    };
  }, [locationEnabled]);

  /* =======================================================
     USER MAP POSITION
  ======================================================= */

  const userMapPosition =
    userLocation
      ? gpsToMapPosition(
          userLocation.lat,
          userLocation.lng
        )
      : null;

  /* =======================================================
     SELECTED DESTINATION
  ======================================================= */

  const destination =
    locations.find(
      (location) =>
        location.id === selected
    );

  /* =======================================================
     FILTER LOCATIONS
  ======================================================= */

  const filteredLocations =
    useMemo(() => {
      const text =
        search.trim().toLowerCase();

      if (!text) {
        return locations;
      }

      return locations.filter(
        (location) =>
          location.name
            .toLowerCase()
            .includes(text) ||
          location.type
            .toLowerCase()
            .includes(text)
      );
    }, [search]);

  /* =======================================================
     DYNAMIC SHORTEST ROUTE
  ======================================================= */

  const route =
    destination
      ? getRoute(
          destination.id,
          userMapPosition
        )
      : [];

  const routePoints =
    route
      .map(
        ([x, y]) =>
          `${x},${y}`
      )
      .join(" ");

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="feature-page navigation-page">

      {/* ===================================================
          BACK
      =================================================== */}

      <button
        className="feature-back"
        onClick={onBack}
      >
        ←
      </button>

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="feature-header">

        <span>🧭</span>

        <div>
          <h1>
            Smart Navigation
          </h1>

          <p>
            Find the shortest walking
            route inside campus.
          </p>
        </div>

      </div>

      {/* ===================================================
          SEARCH
      =================================================== */}

      <div className="navigation-search">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      {/* ===================================================
          LOCATION BUTTON
      =================================================== */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
          flexWrap: "wrap",
        }}
      >

        <button
          onClick={
            startLocationTracking
          }
          disabled={isLocating}
          style={{
            padding:
              "10px 16px",
            borderRadius:
              "10px",
            border: "1px solid #1683ff",
            background:
              locationEnabled
                ? "#1683ff"
                : "transparent",
            color:
              locationEnabled
                ? "#fff"
                : "#1683ff",
            cursor:
              isLocating
                ? "wait"
                : "pointer",
            fontWeight: 600,
          }}
        >
          {isLocating
            ? "📍 Getting location..."
            : locationEnabled
            ? "📍 Location Active"
            : "📍 Enable My Location"}
        </button>

        {locationError && (
          <div
            style={{
              display: "flex",
              alignItems:
                "center",
              fontSize: "13px",
              color: "#ff6b6b",
            }}
          >
            ⚠️ {locationError}
          </div>
        )}

      </div>

      {/* ===================================================
          MAIN LAYOUT
      =================================================== */}

      <div className="navigation-layout">

        {/* =================================================
            MAP
        ================================================= */}

        <div className="map-card">

          <div className="map-header">

            <div>

              <h2>
                Campus Map
              </h2>

              <p>
                {destination
                  ? `Route to ${destination.name}`
                  : "Select a destination"}
              </p>

            </div>

            {destination && (
              <button
                className="clear-route"
                onClick={() =>
                  setSelected(null)
                }
              >
                Clear
              </button>
            )}

          </div>

          {/* =================================================
              MAP WRAPPER
          ================================================= */}

          <div
            className="map-wrapper"
            style={{
              position:
                "relative",
            }}
          >

            {/* ORIGINAL MAP */}

            <img
              src={campusMap}
              alt="Campus Map"
              className="campus-map"
            />

            {/* =================================================
                BLUE LIVE ROUTE
            ================================================= */}

            {destination &&
              route.length > 1 && (
                <svg
                  className="navigation-route"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{
                    position:
                      "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents:
                      "none",
                    zIndex: 5,
                    overflow:
                      "visible",
                  }}
                >

                  {/* BLUE GLOW */}

                  <polyline
                    points={
                      routePoints
                    }
                    fill="none"
                    stroke="#1683ff"
                    strokeOpacity="0.25"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* MAIN BLUE LINE */}

                  <polyline
                    points={
                      routePoints
                    }
                    fill="none"
                    stroke="#1683ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                </svg>
              )}

            {/* =================================================
                MAIN GATE
            ================================================= */}

            {!userLocation && (
              <button
                className="map-location map-gate"
                style={{
                  left: `${mainGate.x}%`,
                  top: `${mainGate.y}%`,
                }}
              >

                <span className="map-location-pin">
                  📍
                </span>

                <span className="map-location-name">
                  Main Gate
                </span>

              </button>
            )}

            {/* =================================================
                USER LOCATION
            ================================================= */}

            {userMapPosition && (
              <div
                className="user-location"
                style={{
                  position:
                    "absolute",
                  left: `${userMapPosition.x}%`,
                  top: `${userMapPosition.y}%`,
                  transform:
                    "translate(-50%, -50%)",
                  zIndex: 20,
                  pointerEvents:
                    "none",
                }}
              >

                <div
                  className="user-location-pulse"
                  style={{
                    position:
                      "absolute",
                    width: "34px",
                    height: "34px",
                    borderRadius:
                      "50%",
                    background:
                      "rgba(22,131,255,0.20)",
                    transform:
                      "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                  }}
                />

                <div
                  className="user-location-dot"
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius:
                      "50%",
                    background:
                      "#1683ff",
                    border:
                      "3px solid white",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,.4)",
                    position:
                      "relative",
                    zIndex: 2,
                  }}
                />

                <span
                  style={{
                    position:
                      "absolute",
                    top: "18px",
                    left: "50%",
                    transform:
                      "translateX(-50%)",
                    whiteSpace:
                      "nowrap",
                    fontSize: "11px",
                    fontWeight: 700,
                    background:
                      "#111",
                    color:
                      "#fff",
                    padding:
                      "3px 7px",
                    borderRadius:
                      "5px",
                  }}
                >
                  You are here
                </span>

              </div>
            )}

            {/* =================================================
                DESTINATION
            ================================================= */}

            {destination && (
              <button
                className="map-location map-destination"
                style={{
                  left: `${destination.x}%`,
                  top: `${destination.y}%`,
                  zIndex: 10,
                }}
              >

                <span className="map-location-pin">
                  📍
                </span>

                <span className="map-location-name">
                  {destination.name}
                </span>

              </button>
            )}

            {/* =================================================
                LOCATION STATUS
            ================================================= */}

            {!userLocation &&
              !locationError && (
                <div
                  className="location-status"
                  style={{
                    position:
                      "absolute",
                    bottom: "10px",
                    left: "10px",
                    zIndex: 30,
                  }}
                >
                  📍 Enable your location
                  to navigate from where
                  you are.
                </div>
              )}

          </div>

          {/* =================================================
              ROUTE INFO
          ================================================= */}

          {destination && (
            <div className="route-card">

              <div className="route-location">

                <small>
                  START
                </small>

                <strong>
                  📍{" "}
                  {userLocation
                    ? "Your Location"
                    : "🚪 Main Gate"}
                </strong>

              </div>

              <div className="route-arrow">
                →
              </div>

              <div className="route-location">

                <small>
                  DESTINATION
                </small>

                <strong>
                  {destination.icon}{" "}
                  {destination.name}
                </strong>

              </div>

              <div className="route-details">

                <div>

                  <span>
                    📏
                  </span>

                  <strong>
                    {getDistance(
                      destination,
                      userLocation
                    )}{" "}
                    m
                  </strong>

                  <small>
                    Distance
                  </small>

                </div>

                <div>

                  <span>
                    🧭
                  </span>

                  <strong>
                    {getDirection(
                      destination,
                      userLocation
                    )}
                  </strong>

                  <small>
                    Direction
                  </small>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* =================================================
            CAMPUS PLACES
        ================================================= */}

        <div className="places-card">

          <h2>
            Campus Places
          </h2>

          <p className="places-subtitle">
            Choose one destination
          </p>

          {/* STARTING POINT */}

          <div className="starting-point">

            <span>
              📍
            </span>

            <div>

              <small>
                Starting Point
              </small>

              <strong>
                {userLocation
                  ? "Your Location"
                  : "Main Gate"}
              </strong>

            </div>

          </div>

          {/* LOCATIONS */}

          <div className="places-list">

            {filteredLocations.map(
              (location) => {

                const isSelected =
                  selected ===
                  location.id;

                return (
                  <button
                    key={location.id}
                    className={`place-button ${
                      isSelected
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => {
                      setSelected(
                        location.id
                      );
                    }}
                  >

                    <span className="place-icon">
                      {location.icon}
                    </span>

                    <div className="place-info">

                      <strong>
                        {location.name}
                      </strong>

                      <span>
                        {location.type}
                      </span>

                    </div>

                    <span className="place-action">
                      {isSelected
                        ? "✓"
                        : "→"}
                    </span>

                  </button>
                );
              }
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navigation;
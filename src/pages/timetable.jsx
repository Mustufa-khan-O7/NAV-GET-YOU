import React, { useState } from "react";

function Timetable({ onBack }) {
  const [selectedSection, setSelectedSection] = useState("A");
  const [selectedDay, setSelectedDay] = useState("MON");

  // -------------------------------------------------
  // COMMON TIME SLOTS
  // -------------------------------------------------

  const timeSlots = [
    "09:00 - 09:45",
    "09:45 - 10:30",
    "10:30 - 11:20",
    "11:20 - 12:10",
    "12:10 - 01:00",
    "01:00 - 01:50",
    "01:50 - 02:40",
    "02:40 - 03:30",
  ];

  // -------------------------------------------------
  // SUBJECTS
  // -------------------------------------------------

  const subjects = {
    "BAI-301": "Object Oriented Programming in C++",
    "BAI-302": "Data Base Management System",
    "BAI-303": "Statistical Modelling and Data Reasoning with Python",
    "BAI-304": "Discrete Maths",
    "BAI-305": "Data Visualization",
    "BAI-306": "Programming Lab in C++",
    "BAI-307": "Programming Lab in DBMS",
    "BAI-303/T": "Statistical Modelling and Data Reasoning with Python - Tutorial",
    "BAI-304/T": "Discrete Maths - Tutorial",
    "BAI-305/T": "Data Visualization - Tutorial",
    Library: "Library",
  };

  // -------------------------------------------------
  // SECTION A
  // -------------------------------------------------

  const sectionA = {
    room: "401/MCA",

    teachers: {
      "BAI-301": "Prof Ripusoodan Sharma",
      "BAI-302": "Prof Anshu Gangwar",
      "BAI-303": "Mr. Aniket Satpute",
      "BAI-304": "Prof Jagruti Durugkar",
      "BAI-305": "Prof Kaiwalya Zankar",
      "BAI-306": "Prof Ripusoodan Sharma",
      "BAI-307": "Prof Anshu Gangwar",
      "BAI-303/T": "Prof Anshu Gangwar",
      "BAI-304/T": "Prof Jagruti Durugkar",
      "BAI-305/T": "Prof Ripusoodan Sharma",
      Library: "Prof Jagruti Durugkar",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-303",
        "BAI-305",
        "Library",
      ],

      TUE: [
        null,
        null,
        "BAI-304",
        "BAI-303/T",
        "LUNCH",
        "BAI-301",
        "BAI-307",
        null,
      ],

      WED: [
        null,
        null,
        "BAI-304",
        "BAI-303",
        "LUNCH",
        "BAI-302",
        "BAI-301",
        "BAI-305",
      ],

      THU: [
        null,
        null,
        "BAI-304",
        "BAI-303",
        "LUNCH",
        "BAI-301",
        "BAI-305",
        "BAI-302",
      ],

      FRI: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-304/T",
        "BAI-302",
        "BAI-305",
      ],
    },
  };

  // -------------------------------------------------
  // SECTION B
  // -------------------------------------------------

  const sectionB = {
    room: "402/MCA",

    teachers: {
      "BAI-301": "Prof Ripusoodan Sharma",
      "BAI-302": "Prof Anshu Gangwar",
      "BAI-303": "Mr. Aniket Satpute",
      "BAI-304": "Prof Jagruti Durugkar",
      "BAI-305": "Ms. Swarupa Waghmare",
      "BAI-306": "Prof Ripusoodan Sharma",
      "BAI-307": "Prof Anshu Gangwar",
      "BAI-303/T": "Prof Anshu Gangwar",
      "BAI-304/T": "Prof Anshu Gangwar",
      "BAI-305/T": "Prof Anshu Gangwar",
      Library: "Prof Ripusoodan Sharma",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-307",
        "BAI-307",
        "LUNCH",
        "BAI-301",
        "BAI-304",
        "BAI-303/T",
      ],

      TUE: [
        null,
        null,
        "BAI-301",
        "BAI-305",
        "LUNCH",
        "BAI-302",
        "BAI-304/T",
        "BAI-303",
      ],

      WED: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-305",
        "BAI-304",
        "BAI-303",
      ],

      THU: [
        null,
        null,
        "Library",
        "BAI-302",
        "LUNCH",
        "BAI-305/T",
        "BAI-306",
        "BAI-306",
      ],

      FRI: [
        null,
        null,
        "BAI-305",
        "BAI-303",
        "LUNCH",
        "BAI-301",
        "BAI-304",
        "BAI-302",
      ],
    },
  };

  // -------------------------------------------------
  // SECTION C
  // -------------------------------------------------

  const sectionC = {
    room: "403/MCA",

    teachers: {
      "BAI-301": "Prof Mohit Kubade",
      "BAI-302": "Prof Dipanshu Jha",
      "BAI-303": "Mr. Aniket Satpute",
      "BAI-304": "Prof Jagruti Durugkar",
      "BAI-305": "Ms. Swarupa Waghmare",
      "BAI-306": "Prof Mohit Kubade",
      "BAI-307": "Prof Dipanshu Jha",
      "BAI-303/T": "Prof Mohit Kubade",
      "BAI-304/T": "Prof Mohit Kubade",
      "BAI-305/T": "Prof Mohit Kubade",
      Library: "Prof Dipanshu Jha",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-304",
        "BAI-305",
        "LUNCH",
        "BAI-301",
        "Library",
        "BAI-302",
      ],

      TUE: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-304",
        "BAI-303/T",
        null,
      ],

      WED: [
        null,
        null,
        "BAI-307",
        "BAI-307",
        "LUNCH",
        "BAI-301",
        "BAI-303",
        "BAI-305/T",
      ],

      THU: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-304/T",
        "BAI-303",
        "BAI-305",
      ],

      FRI: [
        null,
        null,
        "BAI-304",
        "BAI-305",
        "LUNCH",
        "BAI-301",
        "BAI-303",
        "BAI-302",
      ],
    },
  };

  // -------------------------------------------------
  // SECTION D
  // -------------------------------------------------

  const sectionD = {
    room: "404/MCA",

    teachers: {
      "BAI-301": "Dr Alka Gulati",
      "BAI-302": "Prof Dipanshu Jha",
      "BAI-303": "Mr. Aniket Satpute",
      "BAI-304": "Prof Neha Swanakar",
      "BAI-305": "Ms. Swarupa Waghmare",
      "BAI-306": "Dr Alka Gulati",
      "BAI-307": "Prof Dipanshu Jha",
      "BAI-303/T": "Dr Alka Gulati",
      "BAI-304/T": "Dr Swagatika Lenka",
      "BAI-305/T": "Dr Swagatika Lenka",
      Library: "Prof Dipanshu Jha",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-302",
        "BAI-303/T",
        "BAI-304",
      ],

      TUE: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-302",
        "BAI-305",
        "BAI-304/T",
      ],

      WED: [
        null,
        null,
        "BAI-303",
        "BAI-305",
        "LUNCH",
        "BAI-302",
        "BAI-301",
        "BAI-304",
      ],

      THU: [
        null,
        null,
        "BAI-303",
        "BAI-305",
        "LUNCH",
        "BAI-301",
        "BAI-307",
        "BAI-307",
      ],

      FRI: [
        null,
        null,
        "BAI-303",
        "Library",
        "LUNCH",
        "BAI-301",
        "BAI-305/T",
        "BAI-304",
      ],
    },
  };

  // -------------------------------------------------
  // SECTION E
  // -------------------------------------------------

  const sectionE = {
    room: "407/MCA",

    teachers: {
      "BAI-301": "Dr Alka Gulati",
      "BAI-302": "Prof Dipanshu Jha",
      "BAI-303": "Mr Jitendra Maind",
      "BAI-304": "Prof Jagruti Durugkar",
      "BAI-305": "Ms. Swarupa Waghmare",
      "BAI-306": "Dr Alka Gulati",
      "BAI-307": "Prof Dipanshu Jha",
      "BAI-303/T": "Prof Jagruti Durugkar",
      "BAI-304/T": "Prof Jagruti Durugkar",
      "BAI-305/T": "Prof Jagruti Durugkar",
      Library: "Dr Alka Gulati",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-302",
        "BAI-304",
        "LUNCH",
        "BAI-301",
        "BAI-305/T",
        "BAI-303",
      ],

      TUE: [
        null,
        null,
        "BAI-305",
        "BAI-304",
        "LUNCH",
        "BAI-301",
        "BAI-302",
        "BAI-303/T",
      ],

      WED: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-304",
        "BAI-305",
        "BAI-303",
      ],

      THU: [
        null,
        null,
        "BAI-307",
        "BAI-307",
        "LUNCH",
        "BAI-303",
        "BAI-304/T",
        "BAI-301",
      ],

      FRI: [
        null,
        null,
        "BAI-306",
        "BAI-306",
        "LUNCH",
        "BAI-305",
        "BAI-302",
        "Library",
      ],
    },
  };

  // -------------------------------------------------
  // SECTION F
  // -------------------------------------------------

  const sectionF = {
    room: "408/MCA",

    teachers: {
      "BAI-301": "Prof Mohit Kubade",
      "BAI-302": "Prof Pramod Kumar Saket",
      "BAI-303": "Mr Jitendra Maind",
      "BAI-304": "Prof Jagruti Durugkar",
      "BAI-305": "Mr Kaiwalya Zankar",
      "BAI-306": "Prof Mohit Kubade",
      "BAI-307": "Prof Pramod Kumar Saket",
      "BAI-303/T": "Prof Atul Verma",
      "BAI-304/T": "Prof Atul Verma",
      "BAI-305/T": "Prof Atul Verma",
      Library: "Prof Mohit Kubade",
    },

    timetable: {
      MON: [
        null,
        null,
        "BAI-303",
        "BAI-301",
        "LUNCH",
        "BAI-304/T",
        "BAI-306",
        "BAI-306",
      ],

      TUE: [
        null,
        null,
        "BAI-307",
        "BAI-307",
        "LUNCH",
        "BAI-305",
        "BAI-301",
        "Library",
      ],

      WED: [
        null,
        null,
        "BAI-302",
        "BAI-304",
        "LUNCH",
        "BAI-305/T",
        "BAI-306",
        "BAI-306",
      ],

      THU: [
        null,
        null,
        "BAI-303",
        "BAI-304",
        "LUNCH",
        "BAI-305",
        "BAI-303",
        "BAI-302",
      ],

      FRI: [
        null,
        null,
        "BAI-301",
        "BAI-304",
        "LUNCH",
        "BAI-305",
        "BAI-303/T",
        "BAI-302",
      ],
    },
  };

  // -------------------------------------------------
  // ALL SECTIONS
  // -------------------------------------------------

  const sections = {
    A: sectionA,
    B: sectionB,
    C: sectionC,
    D: sectionD,
    E: sectionE,
    F: sectionF,
  };

  const currentSection = sections[selectedSection];
  const currentDay = currentSection.timetable[selectedDay];

  const dayNames = {
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday",
  };

  // -------------------------------------------------
  // UI
  // -------------------------------------------------

  return (
    <div className="feature-page">

      {/* Back Button */}
      <button
        className="feature-back"
        onClick={onBack}
      >
        ← 
      </button>

      {/* Header */}
      <div className="feature-header">

        <span>📅</span>

        <div>
          <h1>My Timetable</h1>

          <p>
            BCA III Semester • AI & DA • Jul-Dec 2026
          </p>

          <small>
            Classes w.e.f. 13/07/2026
          </small>
        </div>

      </div>

      {/* Section + Room */}
      <div className="timetable-controls">

        <div className="section-select">

          <label>Section</label>

          <select
            value={selectedSection}
            onChange={(e) => {
              setSelectedSection(e.target.value);
              setSelectedDay("MON");
            }}
          >
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
            <option value="D">Section D</option>
            <option value="E">Section E</option>
            <option value="F">Section F</option>
          </select>

        </div>

        <div className="room-info">
          <span>🏫</span>

          <div>
            <small>Room</small>
            <strong>{currentSection.room}</strong>
          </div>
        </div>

      </div>

      {/* Day Tabs */}
      <div className="day-selector">

        {["MON", "TUE", "WED", "THU", "FRI"].map(
          (day) => (

            <button
              key={day}
              className={
                selectedDay === day
                  ? "active-day"
                  : ""
              }
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>

          )
        )}

      </div>

      {/* Timetable Card */}
      <div className="timetable-card">

        <div className="timetable-title">

          <div>

            <h2>
              {dayNames[selectedDay]} Schedule
            </h2>

            <p>
              Section {selectedSection} • Room{" "}
              {currentSection.room}
            </p>

          </div>

          <span className="class-count">
            {
              currentDay.filter(
                (item) =>
                  item !== null &&
                  item !== "LUNCH"
              ).length
            } Classes
          </span>

        </div>

        {/* Classes */}
        <div className="class-list">

          {currentDay.map((code, index) => {

            if (code === "LUNCH") {
              return (
                <div
                  className="timetable-lunch"
                  key={index}
                >
                  <div className="time-column">
                    <strong>
                      {timeSlots[index]}
                    </strong>
                  </div>

                  <div className="lunch-content">
                    🍴 Lunch Break
                  </div>
                </div>
              );
            }

            if (!code) {
              return null;
            }

            const subject =
              subjects[code] || code;

            const teacher =
              currentSection.teachers[code] ||
              "Faculty not specified";

            return (
              <div
                className="timetable-item"
                key={index}
              >

                {/* Time */}
                <div className="time-column">
                  <strong>
                    {timeSlots[index]}
                  </strong>
                </div>

                {/* Timeline */}
                <div className="timeline-dot"></div>

                {/* Subject */}
                <div className="subject-info">

                  <h3>
                    {subject}
                  </h3>

                  <p>
                    📘 {code}
                  </p>

                  <span>
                    👨‍🏫 {teacher}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Timetable;
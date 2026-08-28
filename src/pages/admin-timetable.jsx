import { useState } from "react";

function AdminTimetable({ onBack }) {

  // =====================================================
  // BASIC INFORMATION FROM OFFICIAL TIMETABLE
  // =====================================================

  const periods = [
    {
      id: 1,
      name: "I",
      time: "09:00 - 09:45",
    },
    {
      id: 2,
      name: "II",
      time: "09:45 - 10:30",
    },
    {
      id: 3,
      name: "III",
      time: "10:30 - 11:20",
    },
    {
      id: 4,
      name: "IV",
      time: "11:20 - 12:10",
    },
    {
      id: 5,
      name: "V",
      time: "12:10 - 01:00",
    },
    {
      id: 6,
      name: "VI",
      time: "01:00 - 01:50",
    },
    {
      id: 7,
      name: "VII",
      time: "01:50 - 02:40",
    },
    {
      id: 8,
      name: "VIII",
      time: "02:40 - 03:30",
    },
  ];


  const days = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
  ];


  // =====================================================
  // SUBJECT INFORMATION
  // =====================================================

  const subjects = {

    "BAI-301": {
      name: "Data Visualization",
    },

    "BAI-302": {
      name: "Database Management System",
    },

    "BAI-303": {
      name: "Statistical Modelling & Data Reasoning with Python",
    },

    "BAI-304": {
      name: "Object Oriented Programming in C++",
    },

    "BAI-305": {
      name: "Discrete Maths",
    },

    "BAI-306": {
      name: "Programming Lab in C++",
    },

    "BAI-307": {
      name: "Programming Lab in DBMS",
    },

    "Library": {
      name: "Library",
    },

    "T": {
      name: "Tutorial",
    },
  };


  // =====================================================
  // SECTION INFORMATION
  // =====================================================

  const sectionInfo = {

    A: {
      room: "401/MCA",
    },

    B: {
      room: "402/MCA",
    },

    C: {
      room: "403/MCA",
    },

    D: {
      room: "404/MCA",
    },

    E: {
      room: "407/MCA",
    },

    F: {
      room: "408/MCA",
    },

  };


  // =====================================================
  // OFFICIAL PDF TIMETABLE
  //
  // Each array represents:
  // I, II, III, IV, V, VI, VII, VIII
  // =====================================================

  const timetable = {

    // ---------------------------------------------------
    // SECTION A
    // ---------------------------------------------------

    A: {

      MON: [
        "BAI-304",
        "BAI-305",
        "BAI-301",
        "Library",
        "",
        "BAI-302",
        "",
        "",
      ],

      TUE: [
        "BAI-304",
        "BAI-303/T",
        "BAI-302",
        "",
        "",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-301",
        "BAI-303",
        "BAI-305/T",
        "",
        "",
        "",
        "",
        "",
      ],

      THU: [
        "BAI-304/T",
        "BAI-303",
        "BAI-305",
        "",
        "",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-304",
        "BAI-305",
        "BAI-301",
        "BAI-303",
        "BAI-302",
        "",
        "",
        "",
      ],

    },


    // ---------------------------------------------------
    // SECTION B
    // ---------------------------------------------------

    B: {

      MON: [
        "BAI-301",
        "BAI-304",
        "BAI-303/T",
        "",
        "",
        "",
        "",
        "",
      ],

      TUE: [
        "BAI-301",
        "BAI-305",
        "BAI-302",
        "BAI-304/T",
        "BAI-303",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-305",
        "BAI-304",
        "BAI-303",
        "",
        "",
        "",
        "",
        "",
      ],

      THU: [
        "Library",
        "BAI-302",
        "BAI-305/T",
        "",
        "",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-305",
        "BAI-303",
        "BAI-301",
        "BAI-304",
        "BAI-302",
        "",
        "",
        "",
      ],

    },


    // ---------------------------------------------------
    // SECTION C
    // ---------------------------------------------------

    C: {

      MON: [
        "BAI-303",
        "BAI-305",
        "Library",
        "",
        "",
        "",
        "",
        "",
      ],

      TUE: [
        "BAI-304",
        "BAI-303/T",
        "BAI-301",
        "",
        "",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-304",
        "BAI-303",
        "BAI-302",
        "BAI-301",
        "BAI-305",
        "",
        "",
        "",
      ],

      THU: [
        "BAI-304",
        "BAI-303",
        "BAI-301",
        "BAI-305",
        "BAI-302",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-304/T",
        "BAI-302",
        "BAI-305",
        "",
        "",
        "",
        "",
        "",
      ],

    },


    // ---------------------------------------------------
    // SECTION D
    // ---------------------------------------------------

    D: {

      MON: [
        "BAI-302",
        "BAI-304",
        "BAI-301",
        "BAI-305/T",
        "BAI-303",
        "",
        "",
        "",
      ],

      TUE: [
        "BAI-305",
        "BAI-304",
        "BAI-301",
        "BAI-302",
        "BAI-303/T",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-304",
        "BAI-305",
        "BAI-303",
        "",
        "",
        "",
        "",
        "",
      ],

      THU: [
        "BAI-303",
        "BAI-304/T",
        "BAI-301",
        "",
        "",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-305",
        "BAI-302",
        "Library",
        "",
        "",
        "",
        "",
        "",
      ],

    },


    // ---------------------------------------------------
    // SECTION E
    // ---------------------------------------------------

    E: {

      MON: [
        "BAI-303",
        "BAI-301",
        "BAI-304/T",
        "",
        "",
        "",
        "",
        "",
      ],

      TUE: [
        "BAI-305",
        "BAI-301",
        "Library",
        "",
        "",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-302",
        "BAI-304",
        "BAI-305/T",
        "",
        "",
        "",
        "",
        "",
      ],

      THU: [
        "BAI-303",
        "BAI-304",
        "BAI-305",
        "BAI-303",
        "BAI-302",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-301",
        "BAI-304",
        "BAI-305",
        "BAI-303/T",
        "BAI-302",
        "",
        "",
        "",
      ],

    },


    // ---------------------------------------------------
    // SECTION F
    // ---------------------------------------------------

    F: {

      MON: [
        "BAI-302",
        "BAI-303/T",
        "BAI-304",
        "",
        "",
        "",
        "",
        "",
      ],

      TUE: [
        "BAI-302",
        "BAI-305",
        "BAI-304/T",
        "",
        "",
        "",
        "",
        "",
      ],

      WED: [
        "BAI-303",
        "BAI-305",
        "BAI-302",
        "BAI-301",
        "BAI-304",
        "",
        "",
        "",
      ],

      THU: [
        "BAI-303",
        "BAI-305",
        "BAI-301",
        "",
        "",
        "",
        "",
        "",
      ],

      FRI: [
        "BAI-303",
        "Library",
        "BAI-301",
        "BAI-305/T",
        "BAI-304",
        "",
        "",
        "",
      ],

    },

  };


  // =====================================================
  // STATE
  // =====================================================

  const [selectedSection, setSelectedSection] =
    useState("A");

  const [selectedDay, setSelectedDay] =
    useState("MON");

  const [search, setSearch] =
    useState("");

  const [showForm, setShowForm] =
    useState(false);

  const [editingClass, setEditingClass] =
    useState(null);


  const [customClasses, setCustomClasses] =
    useState([]);


  const [formData, setFormData] = useState({

    section: "A",

    day: "MON",

    period: "I",

    subject: "",

  });


  // =====================================================
  // GET CURRENT SCHEDULE
  // =====================================================

  const currentSchedule =
    timetable[selectedSection][selectedDay];


  // =====================================================
  // SEARCH FILTER
  // =====================================================

  const visiblePeriods = periods.filter(
    (period, index) => {

      const code =
        currentSchedule[index];

      if (!search.trim()) {
        return true;
      }

      if (!code) {
        return false;
      }

      const subjectName =
        subjects[code]?.name || "";

      const searchText =
        `${code} ${subjectName}`.toLowerCase();

      return searchText.includes(
        search.toLowerCase()
      );

    }
  );


  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // =====================================================
  // ADD / UPDATE CLASS
  // =====================================================

  const saveClass = (e) => {

    e.preventDefault();

    const newClass = {

      id: editingClass
        ? editingClass.id
        : Date.now(),

      section: formData.section,

      day: formData.day,

      period: formData.period,

      subject: formData.subject,

    };


    if (editingClass) {

      setCustomClasses(
        customClasses.map((item) =>
          item.id === editingClass.id
            ? newClass
            : item
        )
      );

    } else {

      setCustomClasses([
        ...customClasses,
        newClass,
      ]);

    }

    closeForm();

  };


  // =====================================================
  // DELETE CLASS
  // =====================================================

  const deleteClass = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this class?"
      );

    if (!confirmDelete) return;

    setCustomClasses(
      customClasses.filter(
        (item) => item.id !== id
      )
    );

  };


  // =====================================================
  // EDIT CUSTOM CLASS
  // =====================================================

  const editClass = (item) => {

    setEditingClass(item);

    setFormData({
      section: item.section,
      day: item.day,
      period: item.period,
      subject: item.subject,
    });

    setShowForm(true);

  };


  // =====================================================
  // CLOSE FORM
  // =====================================================

  const closeForm = () => {

    setShowForm(false);

    setEditingClass(null);

    setFormData({

      section: selectedSection,

      day: selectedDay,

      period: "I",

      subject: "",

    });

  };


  // =====================================================
  // GET CUSTOM CLASS
  // =====================================================

  const getCustomClass = (periodName) => {

    return customClasses.find(
      (item) =>
        item.section === selectedSection &&
        item.day === selectedDay &&
        item.period === periodName
    );

  };


  // =====================================================
  // FORMAT SUBJECT
  // =====================================================

  const getSubjectName = (code) => {

    if (!code) {
      return "";
    }

    if (code.includes("/T")) {

      const baseCode =
        code.replace("/T", "");

      return `${subjects[baseCode]?.name || baseCode} • Tutorial`;

    }

    return subjects[code]?.name || code;

  };


  // =====================================================
  // UI
  // =====================================================

  return (

    <div className="admin-timetable-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="timetable-page-header">

        <button
          className="timetable-back-btn"
          onClick={onBack}
          title="Back to Dashboard"
        >
          ←
        </button>


        <div>

          <h1>
            Timetable Management
          </h1>

          <p>
            BCA III Sem • AI & DA • Jul-Dec 2026
          </p>

        </div>

      </div>


      {/* =================================================
          SECTION SELECTOR
      ================================================= */}

      <div className="timetable-section-box">

        <div className="timetable-section-title">

          <span>
            🎓
          </span>

          <div>

            <strong>
              Select Section
            </strong>

            <small>
              Manage timetable for each section
            </small>

          </div>

        </div>


        <div className="timetable-section-buttons">

          {Object.keys(sectionInfo).map(
            (section) => (

              <button
                key={section}
                className={
                  selectedSection === section
                    ? "selected"
                    : ""
                }
                onClick={() => {

                  setSelectedSection(section);

                  setFormData({
                    ...formData,
                    section: section,
                  });

                }}
              >

                <strong>
                  Section {section}
                </strong>

                <small>
                  {sectionInfo[section].room}
                </small>

              </button>

            )
          )}

        </div>

      </div>


      {/* =================================================
          TOOLBAR
      ================================================= */}

      <div className="timetable-toolbar">

        <div className="timetable-search">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search subject or code..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <button
          className="add-class-btn"
          onClick={() => {

            setEditingClass(null);

            setFormData({

              section: selectedSection,

              day: selectedDay,

              period: "I",

              subject: "",

            });

            setShowForm(true);

          }}
        >
          + Add Class
        </button>

      </div>


      {/* =================================================
          DAY TABS
      ================================================= */}

      <div className="timetable-days">

        {days.map((day) => (

          <button
            key={day}
            className={
              selectedDay === day
                ? "selected"
                : ""
            }
            onClick={() =>
              setSelectedDay(day)
            }
          >

            {day}

          </button>

        ))}

      </div>


      {/* =================================================
          SECTION INFORMATION
      ================================================= */}

      <div className="timetable-info-bar">

        <div>

          <span>
            Section
          </span>

          <strong>
            {selectedSection}
          </strong>

        </div>


        <div>

          <span>
            Room
          </span>

          <strong>
            {sectionInfo[selectedSection].room}
          </strong>

        </div>


        <div>

          <span>
            Day
          </span>

          <strong>
            {selectedDay}
          </strong>

        </div>


        <div>

          <span>
            Effective From
          </span>

          <strong>
            13/07/2026
          </strong>

        </div>

      </div>


      {/* =================================================
          TIMETABLE
      ================================================= */}

      <div className="timetable-list">

        {visiblePeriods.length > 0 ? (

          visiblePeriods.map(
            (period) => {

              const index =
                period.id - 1;

              const code =
                currentSchedule[index];

              const customClass =
                getCustomClass(
                  period.name
                );


              // CUSTOM CLASS

              if (customClass) {

                return (

                  <div
                    className="timetable-class-card"
                    key={period.id}
                  >

                    <div className="class-time">

                      <span>
                        🕐
                      </span>

                      <strong>
                        {period.time}
                      </strong>

                    </div>


                    <div className="class-info">

                      <h2>
                        {customClass.subject}
                      </h2>

                      <div className="class-details">

                        <span>
                          🎓 Section {selectedSection}
                        </span>

                        <span>
                          📍 {
                            sectionInfo[
                              selectedSection
                            ].room
                          }
                        </span>

                        <span>
                          Period {period.name}
                        </span>

                      </div>

                    </div>


                    <div className="class-actions">

                      <button
                        onClick={() =>
                          editClass(customClass)
                        }
                        title="Edit Class"
                      >
                        ✏️
                      </button>

                      <button
                        onClick={() =>
                          deleteClass(
                            customClass.id
                          )
                        }
                        title="Delete Class"
                      >
                        🗑️
                      </button>

                    </div>

                  </div>

                );

              }


              // EMPTY PERIOD

              if (!code) {

                return (

                  <div
                    className="timetable-class-card empty-period"
                    key={period.id}
                  >

                    <div className="class-time">

                      <span>
                        🕐
                      </span>

                      <strong>
                        {period.time}
                      </strong>

                    </div>


                    <div className="class-info">

                      <h2>
                        Free Period
                      </h2>

                      <div className="class-details">

                        <span>
                          Period {period.name}
                        </span>

                        <span>
                          No class scheduled
                        </span>

                      </div>

                    </div>


                  </div>

                );

              }


              // NORMAL PDF CLASS

              return (

                <div
                  className="timetable-class-card"
                  key={period.id}
                >

                  <div className="class-time">

                    <span>
                      🕐
                    </span>

                    <strong>
                      {period.time}
                    </strong>

                    <small>
                      Period {period.name}
                    </small>

                  </div>


                  <div className="class-info">

                    <h2>
                      {getSubjectName(code)}
                    </h2>


                    <div className="class-details">

                      <span>
                        📘 {code}
                      </span>

                      <span>
                        🎓 Section {selectedSection}
                      </span>

                      <span>
                        📍 {
                          sectionInfo[
                            selectedSection
                          ].room
                        }
                      </span>

                    </div>

                  </div>


                  <div className="class-status">

                    {code.includes("/T") ? (
                      <span className="tutorial-badge">
                        Tutorial
                      </span>
                    ) : code === "Library" ? (
                      <span className="library-badge">
                        Library
                      </span>
                    ) : (
                      <span className="regular-badge">
                        Class
                      </span>
                    )}

                  </div>

                </div>

              );

            }
          )

        ) : (

          <div className="no-classes">

            <div>
              🔍
            </div>

            <h2>
              No Classes Found
            </h2>

            <p>
              No timetable entry matches your search.
            </p>

          </div>

        )}

      </div>


      {/* =================================================
          SUBJECT LEGEND
      ================================================= */}

      <div className="timetable-subjects">

        <h2>
          Subjects
        </h2>


        <div className="subject-grid">

          {Object.entries(subjects)
            .filter(
              ([code]) =>
                code !== "T"
            )
            .map(
              ([code, subject]) => (

                <div
                  className="subject-item"
                  key={code}
                >

                  <strong>
                    {code}
                  </strong>

                  <span>
                    {subject.name}
                  </span>

                </div>

              )
            )}

        </div>

      </div>


      {/* =================================================
          ADD / EDIT MODAL
      ================================================= */}

      {showForm && (

        <div className="timetable-modal-overlay">

          <div className="timetable-modal">

            <div className="timetable-modal-header">

              <div>

                <h2>
                  {editingClass
                    ? "Edit Class"
                    : "Add New Class"}
                </h2>

                <p>
                  Manage timetable schedule
                </p>

              </div>


              <button
                className="close-timetable-modal"
                onClick={closeForm}
              >
                ×
              </button>

            </div>


            <form onSubmit={saveClass}>

              <div className="timetable-form-grid">


                {/* SECTION */}

                <div className="timetable-form-group">

                  <label>
                    Section
                  </label>

                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                  >

                    {Object.keys(sectionInfo)
                      .map(
                        (section) => (

                          <option
                            key={section}
                            value={section}
                          >
                            Section {section}
                          </option>

                        )
                      )}

                  </select>

                </div>


                {/* DAY */}

                <div className="timetable-form-group">

                  <label>
                    Day
                  </label>

                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                  >

                    {days.map((day) => (

                      <option
                        key={day}
                        value={day}
                      >
                        {day}
                      </option>

                    ))}

                  </select>

                </div>


                {/* PERIOD */}

                <div className="timetable-form-group">

                  <label>
                    Period
                  </label>

                  <select
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                  >

                    {periods.map(
                      (period) => (

                        <option
                          key={period.id}
                          value={period.name}
                        >
                          {period.name} • {
                            period.time
                          }
                        </option>

                      )
                    )}

                  </select>

                </div>


                {/* SUBJECT */}

                <div className="timetable-form-group">

                  <label>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject name"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="timetable-form-actions">

                <button
                  type="button"
                  className="cancel-class-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="save-class-btn"
                >
                  {editingClass
                    ? "Update Class"
                    : "Add Class"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );
}

export default AdminTimetable;
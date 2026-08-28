import { useState } from "react";

function AdminComplaint({ onBack }) {

  // =====================================================
  // INITIAL COMPLAINT DATA
  // =====================================================

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      student: "Rahul Sharma",
      rollNo: "BCA24001",
      section: "A",
      category: "Infrastructure",
      subject: "AC not working in classroom",
      description:
        "The AC in Room 401 is not working properly during classes.",
      date: "27 Aug 2026",
      priority: "High",
      status: "Pending",
    },

    {
      id: 2,
      student: "Aman Khan",
      rollNo: "BCA24018",
      section: "B",
      category: "IT Support",
      subject: "Wi-Fi connectivity issue",
      description:
        "Campus Wi-Fi is disconnecting frequently in the computer lab.",
      date: "26 Aug 2026",
      priority: "Medium",
      status: "In Progress",
    },

    {
      id: 3,
      student: "Priya Verma",
      rollNo: "BCA24032",
      section: "C",
      category: "Library",
      subject: "Book not available",
      description:
        "Required DBMS reference book is not available in the library.",
      date: "25 Aug 2026",
      priority: "Low",
      status: "Resolved",
    },

    {
      id: 4,
      student: "Arjun Patel",
      rollNo: "BCA24047",
      section: "D",
      category: "Classroom",
      subject: "Projector issue",
      description:
        "Projector is not displaying the content correctly.",
      date: "24 Aug 2026",
      priority: "High",
      status: "Pending",
    },

    {
      id: 5,
      student: "Neha Singh",
      rollNo: "BCA24059",
      section: "E",
      category: "Transport",
      subject: "Bus timing issue",
      description:
        "College bus is arriving late at the regular pickup point.",
      date: "23 Aug 2026",
      priority: "Medium",
      status: "In Progress",
    },

    {
      id: 6,
      student: "Mohit Jain",
      rollNo: "BCA24071",
      section: "F",
      category: "Other",
      subject: "ID card issue",
      description:
        "Student ID card has not been issued yet.",
      date: "22 Aug 2026",
      priority: "Low",
      status: "Resolved",
    },
  ]);


  // =====================================================
  // STATES
  // =====================================================

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const [selectedComplaint, setSelectedComplaint] =
    useState(null);

  const [showAddForm, setShowAddForm] =
    useState(false);


  const [formData, setFormData] = useState({
    student: "",
    rollNo: "",
    section: "A",
    category: "Infrastructure",
    subject: "",
    description: "",
    priority: "Medium",
  });


  // =====================================================
  // STATISTICS
  // =====================================================

  const totalComplaints = complaints.length;

  const pendingComplaints =
    complaints.filter(
      (item) => item.status === "Pending"
    ).length;

  const progressComplaints =
    complaints.filter(
      (item) => item.status === "In Progress"
    ).length;

  const resolvedComplaints =
    complaints.filter(
      (item) => item.status === "Resolved"
    ).length;


  // =====================================================
  // SEARCH + FILTER
  // =====================================================

  const filteredComplaints =
    complaints.filter((complaint) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        complaint.student
          .toLowerCase()
          .includes(searchText) ||

        complaint.rollNo
          .toLowerCase()
          .includes(searchText) ||

        complaint.subject
          .toLowerCase()
          .includes(searchText) ||

        complaint.category
          .toLowerCase()
          .includes(searchText);


      const matchesStatus =
        statusFilter === "All" ||
        complaint.status === statusFilter;


      const matchesPriority =
        priorityFilter === "All" ||
        complaint.priority === priorityFilter;


      const matchesCategory =
        categoryFilter === "All" ||
        complaint.category === categoryFilter;


      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory
      );

    });


  // =====================================================
  // UPDATE STATUS
  // =====================================================

  const updateStatus = (id, newStatus) => {

    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id
          ? {
              ...complaint,
              status: newStatus,
            }
          : complaint
      )
    );


    if (selectedComplaint) {

      setSelectedComplaint({
        ...selectedComplaint,
        status: newStatus,
      });

    }

  };


  // =====================================================
  // DELETE COMPLAINT
  // =====================================================

  const deleteComplaint = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this complaint?"
      );

    if (!confirmDelete) return;


    setComplaints(
      complaints.filter(
        (complaint) =>
          complaint.id !== id
      )
    );


    if (
      selectedComplaint &&
      selectedComplaint.id === id
    ) {
      setSelectedComplaint(null);
    }

  };


  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleFormChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // =====================================================
  // ADD NEW COMPLAINT
  // =====================================================

  const addComplaint = (e) => {

    e.preventDefault();


    const newComplaint = {

      id: Date.now(),

      student: formData.student,

      rollNo: formData.rollNo,

      section: formData.section,

      category: formData.category,

      subject: formData.subject,

      description: formData.description,

      date: "27 Aug 2026",

      priority: formData.priority,

      status: "Pending",

    };


    setComplaints([
      newComplaint,
      ...complaints,
    ]);


    setFormData({
      student: "",
      rollNo: "",
      section: "A",
      category: "Infrastructure",
      subject: "",
      description: "",
      priority: "Medium",
    });


    setShowAddForm(false);

  };


  // =====================================================
  // PRIORITY CLASS
  // =====================================================

  const getPriorityClass = (priority) => {

    if (priority === "High") {
      return "priority-high";
    }

    if (priority === "Medium") {
      return "priority-medium";
    }

    return "priority-low";

  };


  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {

    if (status === "Pending") {
      return "status-pending";
    }

    if (status === "In Progress") {
      return "status-progress";
    }

    return "status-resolved";

  };


  // =====================================================
  // UI
  // =====================================================

  return (

    <div className="admin-complaint-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="complaint-page-header">

        <button
          className="complaint-back-btn"
          onClick={onBack}
        >
          ←
        </button>


        <div>

          <h1>
            Complaint Management
          </h1>

          <p>
            Manage and resolve student complaints
          </p>

        </div>

      </div>


      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="complaint-stats">


        <div className="complaint-stat-card">

          <div className="stat-icon">
            📋
          </div>

          <div>

            <span>
              Total Complaints
            </span>

            <strong>
              {totalComplaints}
            </strong>

          </div>

        </div>


        <div className="complaint-stat-card">

          <div className="stat-icon">
            ⏳
          </div>

          <div>

            <span>
              Pending
            </span>

            <strong>
              {pendingComplaints}
            </strong>

          </div>

        </div>


        <div className="complaint-stat-card">

          <div className="stat-icon">
            🔄
          </div>

          <div>

            <span>
              In Progress
            </span>

            <strong>
              {progressComplaints}
            </strong>

          </div>

        </div>


        <div className="complaint-stat-card">

          <div className="stat-icon">
            ✅
          </div>

          <div>

            <span>
              Resolved
            </span>

            <strong>
              {resolvedComplaints}
            </strong>

          </div>

        </div>

      </div>


      {/* =================================================
          TOOLBAR
      ================================================= */}

      <div className="complaint-toolbar">


        <div className="complaint-search">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search student, roll no, subject..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          className="complaint-filter"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Resolved">
            Resolved
          </option>

        </select>


        <select
          className="complaint-filter"
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(e.target.value)
          }
        >

          <option value="All">
            All Priority
          </option>

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>

        </select>


        <select
          className="complaint-filter"
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >

          <option value="All">
            All Categories
          </option>

          <option value="Infrastructure">
            Infrastructure
          </option>

          <option value="IT Support">
            IT Support
          </option>

          <option value="Library">
            Library
          </option>

          <option value="Classroom">
            Classroom
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="Other">
            Other
          </option>

        </select>


        <button
          className="add-complaint-btn"
          onClick={() =>
            setShowAddForm(true)
          }
        >
          + Add Complaint
        </button>

      </div>


      {/* =================================================
          COMPLAINT LIST
      ================================================= */}

      <div className="complaint-list">


        {filteredComplaints.length > 0 ? (

          filteredComplaints.map(
            (complaint) => (

              <div
                className="complaint-card"
                key={complaint.id}
              >


                {/* LEFT */}

                <div className="complaint-main">


                  <div className="complaint-top-row">

                    <span className="complaint-id">
                      #{complaint.id}
                    </span>

                    <span
                      className={`complaint-priority ${
                        getPriorityClass(
                          complaint.priority
                        )
                      }`}
                    >
                      {complaint.priority}
                    </span>

                  </div>


                  <h2>
                    {complaint.subject}
                  </h2>


                  <p>
                    {complaint.description}
                  </p>


                  <div className="complaint-meta">

                    <span>
                      👨‍🎓 {complaint.student}
                    </span>

                    <span>
                      🎓 {complaint.rollNo}
                    </span>

                    <span>
                      Section {complaint.section}
                    </span>

                    <span>
                      📁 {complaint.category}
                    </span>

                    <span>
                      📅 {complaint.date}
                    </span>

                  </div>

                </div>


                {/* RIGHT */}

                <div className="complaint-actions">


                  <span
                    className={`complaint-status ${
                      getStatusClass(
                        complaint.status
                      )
                    }`}
                  >
                    {complaint.status}
                  </span>


                  <button
                    className="view-complaint-btn"
                    onClick={() =>
                      setSelectedComplaint(
                        complaint
                      )
                    }
                  >
                    👁 View
                  </button>


                  <select
                    className="status-select"
                    value={complaint.status}
                    onChange={(e) =>
                      updateStatus(
                        complaint.id,
                        e.target.value
                      )
                    }
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Resolved">
                      Resolved
                    </option>

                  </select>


                  <button
                    className="delete-complaint-btn"
                    onClick={() =>
                      deleteComplaint(
                        complaint.id
                      )
                    }
                  >
                    🗑
                  </button>

                </div>

              </div>

            )

          )

        ) : (

          <div className="no-complaints">

            <div>
              🔍
            </div>

            <h2>
              No Complaints Found
            </h2>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

      </div>


      {/* =================================================
          VIEW COMPLAINT MODAL
      ================================================= */}

      {selectedComplaint && (

        <div className="complaint-modal-overlay">

          <div className="complaint-modal">


            <div className="complaint-modal-header">

              <div>

                <span>
                  Complaint #{selectedComplaint.id}
                </span>

                <h2>
                  {selectedComplaint.subject}
                </h2>

              </div>


              <button
                className="close-complaint-modal"
                onClick={() =>
                  setSelectedComplaint(null)
                }
              >
                ×
              </button>

            </div>


            <div className="complaint-detail-grid">


              <div>

                <label>
                  Student
                </label>

                <strong>
                  {selectedComplaint.student}
                </strong>

              </div>


              <div>

                <label>
                  Roll Number
                </label>

                <strong>
                  {selectedComplaint.rollNo}
                </strong>

              </div>


              <div>

                <label>
                  Section
                </label>

                <strong>
                  {selectedComplaint.section}
                </strong>

              </div>


              <div>

                <label>
                  Category
                </label>

                <strong>
                  {selectedComplaint.category}
                </strong>

              </div>


              <div>

                <label>
                  Priority
                </label>

                <strong>
                  {selectedComplaint.priority}
                </strong>

              </div>


              <div>

                <label>
                  Date
                </label>

                <strong>
                  {selectedComplaint.date}
                </strong>

              </div>

            </div>


            <div className="complaint-description-box">

              <label>
                Complaint Description
              </label>

              <p>
                {selectedComplaint.description}
              </p>

            </div>


            <div className="complaint-modal-status">

              <label>
                Update Status
              </label>

              <select
                value={selectedComplaint.status}
                onChange={(e) =>
                  updateStatus(
                    selectedComplaint.id,
                    e.target.value
                  )
                }
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>

              </select>

            </div>


            <div className="complaint-modal-actions">

              <button
                className="modal-delete-btn"
                onClick={() =>
                  deleteComplaint(
                    selectedComplaint.id
                  )
                }
              >
                🗑 Delete
              </button>


              <button
                className="modal-close-btn"
                onClick={() =>
                  setSelectedComplaint(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          ADD COMPLAINT MODAL
      ================================================= */}

      {showAddForm && (

        <div className="complaint-modal-overlay">

          <div className="complaint-modal add-complaint-modal">


            <div className="complaint-modal-header">

              <div>

                <span>
                  Complaint Management
                </span>

                <h2>
                  Add New Complaint
                </h2>

              </div>


              <button
                className="close-complaint-modal"
                onClick={() =>
                  setShowAddForm(false)
                }
              >
                ×
              </button>

            </div>


            <form onSubmit={addComplaint}>


              <div className="complaint-form-grid">


                <div className="complaint-form-group">

                  <label>
                    Student Name
                  </label>

                  <input
                    name="student"
                    value={formData.student}
                    onChange={handleFormChange}
                    placeholder="Enter student name"
                    required
                  />

                </div>


                <div className="complaint-form-group">

                  <label>
                    Roll Number
                  </label>

                  <input
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleFormChange}
                    placeholder="Enter roll number"
                    required
                  />

                </div>


                <div className="complaint-form-group">

                  <label>
                    Section
                  </label>

                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleFormChange}
                  >

                    <option value="A">
                      Section A
                    </option>

                    <option value="B">
                      Section B
                    </option>

                    <option value="C">
                      Section C
                    </option>

                    <option value="D">
                      Section D
                    </option>

                    <option value="E">
                      Section E
                    </option>

                    <option value="F">
                      Section F
                    </option>

                  </select>

                </div>


                <div className="complaint-form-group">

                  <label>
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                  >

                    <option>
                      Infrastructure
                    </option>

                    <option>
                      IT Support
                    </option>

                    <option>
                      Library
                    </option>

                    <option>
                      Classroom
                    </option>

                    <option>
                      Transport
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>


                <div className="complaint-form-group full">

                  <label>
                    Subject
                  </label>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="Enter complaint subject"
                    required
                  />

                </div>


                <div className="complaint-form-group full">

                  <label>
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    placeholder="Describe the complaint..."
                    rows="4"
                    required
                  />

                </div>


                <div className="complaint-form-group">

                  <label>
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleFormChange}
                  >

                    <option>
                      High
                    </option>

                    <option>
                      Medium
                    </option>

                    <option>
                      Low
                    </option>

                  </select>

                </div>

              </div>


              <div className="complaint-modal-actions">

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
                  Add Complaint
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );
}

export default AdminComplaint;
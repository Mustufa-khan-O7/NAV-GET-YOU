import { useState } from "react";

function AdminStudent({ onBack }) {

  // ================= STUDENT DATA =================

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Mustufa Khan",
      studentId: "NGY2026-001",
      course: "BCA AI-DA",
      semester: "2nd",
      section: "D",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      studentId: "NGY2026-002",
      course: "BCA AI-DA",
      semester: "2nd",
      section: "D",
      status: "Active",
    },
    {
      id: 3,
      name: "Ayan Khan",
      studentId: "NGY2026-003",
      course: "BCA AI-DA",
      semester: "2nd",
      section: "D",
      status: "Active",
    },
  ]);


  // ================= STATES =================

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [editingStudent, setEditingStudent] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    course: "BCA AI-DA",
    semester: "2nd",
    section: "D",
    status: "Active",
  });


  // ================= SEARCH =================

  const filteredStudents = students.filter((student) => {

    const searchText =
      `${student.name} ${student.studentId} ${student.course}`
        .toLowerCase();

    return searchText.includes(search.toLowerCase());

  });


  // ================= INPUT CHANGE =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ================= ADD STUDENT =================

  const addStudent = (e) => {

    e.preventDefault();

    const newStudent = {
      ...formData,
      id: Date.now(),
    };

    setStudents([
      ...students,
      newStudent,
    ]);

    closeForm();

  };


  // ================= DELETE STUDENT =================

  const deleteStudent = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );

  };


  // ================= EDIT STUDENT =================

  const editStudent = (student) => {

    setEditingStudent(student);

    setFormData({
      name: student.name,
      studentId: student.studentId,
      course: student.course,
      semester: student.semester,
      section: student.section,
      status: student.status,
    });

    setShowForm(true);

  };


  // ================= UPDATE STUDENT =================

  const updateStudent = (e) => {

    e.preventDefault();

    setStudents(
      students.map((student) => {

        if (student.id === editingStudent.id) {

          return {
            ...formData,
            id: student.id,
          };

        }

        return student;

      })
    );

    closeForm();

  };


  // ================= CLOSE FORM =================

  const closeForm = () => {

    setShowForm(false);

    setEditingStudent(null);

    setFormData({
      name: "",
      studentId: "",
      course: "BCA AI-DA",
      semester: "2nd",
      section: "D",
      status: "Active",
    });

  };


  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {

    if (editingStudent) {

      updateStudent(e);

    } else {

      addStudent(e);

    }

  };


  // ================= UI =================

  return (

    <div className="admin-student-page">

      {/* ================= HEADER ================= */}

      <div className="student-page-header">

        <button
          className="student-back-btn"
          onClick={onBack}
        >
          ←
        </button>

        <div>
          <h1>Student Management</h1>

          <p>
            Manage all registered students
          </p>
        </div>

      </div>


      {/* ================= TOOLBAR ================= */}

      <div className="student-toolbar">

        <div className="student-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <button
          className="add-student-btn"
          onClick={() => {
            setEditingStudent(null);
            setShowForm(true);
          }}
        >
          + Add Student
        </button>

      </div>


      {/* ================= STUDENT TABLE ================= */}

      <div className="student-table">

        <div className="student-table-header">

          <span>Student</span>
          <span>Course</span>
          <span>Semester</span>
          <span>Section</span>
          <span>Status</span>
          <span>Actions</span>

        </div>


        {filteredStudents.length > 0 ? (

          filteredStudents.map((student) => (

            <div
              className="student-table-row"
              key={student.id}
            >

              {/* Student */}

              <div className="student-info">

                <div className="student-avatar">
                  {student.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>

                  <strong>
                    {student.name}
                  </strong>

                  <small>
                    {student.studentId}
                  </small>

                </div>

              </div>


              {/* Course */}

              <span>
                {student.course}
              </span>


              {/* Semester */}

              <span>
                {student.semester}
              </span>


              {/* Section */}

              <span>
                {student.section}
              </span>


              {/* Status */}

              <span
                className={
                  student.status === "Active"
                    ? "student-active"
                    : "student-inactive"
                }
              >
                {student.status}
              </span>


              {/* Actions */}

              <div className="student-actions">

                <button
                  onClick={() =>
                    editStudent(student)
                  }
                  title="Edit"
                >
                  ✏️
                </button>

                <button
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                  title="Delete"
                >
                  🗑️
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-students">

            <h2>No Students Found</h2>

            <p>
              Try searching with another name or ID.
            </p>

          </div>

        )}

      </div>


      {/* ================= ADD / EDIT MODAL ================= */}

      {showForm && (

        <div className="student-modal-overlay">

          <div className="student-modal">

            <div className="student-modal-header">

              <div>

                <h2>
                  {editingStudent
                    ? "Edit Student"
                    : "Add Student"}
                </h2>

                <p>
                  Enter student information
                </p>

              </div>


              <button
                className="close-student-modal"
                onClick={closeForm}
              >
                ×
              </button>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="student-form-grid">


                {/* Name */}

                <div className="student-form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Student ID */}

                <div className="student-form-group">

                  <label>
                    Student ID
                  </label>

                  <input
                    type="text"
                    name="studentId"
                    placeholder="NGY2026-004"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Course */}

                <div className="student-form-group">

                  <label>
                    Course
                  </label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option>BCA AI-DA</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>B.Tech</option>
                  </select>

                </div>


                {/* Semester */}

                <div className="student-form-group">

                  <label>
                    Semester
                  </label>

                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                  >
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                    <option>4th</option>
                    <option>5th</option>
                    <option>6th</option>
                  </select>

                </div>


                {/* Section */}

                <div className="student-form-group">

                  <label>
                    Section
                  </label>

                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                  >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </select>

                </div>


                {/* Status */}

                <div className="student-form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>

                </div>

              </div>


              {/* Buttons */}

              <div className="student-form-actions">

                <button
                  type="button"
                  className="cancel-student-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="save-student-btn"
                >
                  {editingStudent
                    ? "Update Student"
                    : "Add Student"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );
}

export default AdminStudent;
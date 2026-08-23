function Profile({ onBack }) {
  const student = {
    name: "Mustufa Khan",
    studentId: "NGY2026-001",
    email: "mustufa@example.com",
    phone: "+91 XXXXX XXXXX",
    course: "BCA AI-DA",
    semester: "3nd Semester",
    section: "D",
    rollNo: "BCA-AIDA-202",
  };

  return (
    <div className="feature-page">

      {/* Back */}
      <button
        className="feature-back"
        onClick={onBack}
      >
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div className="feature-header">

        <span>👤</span>

        <div>
          <h1>My Profile</h1>

          <p>
            View your student information and account details.
          </p>
        </div>

      </div>

      {/* Profile Layout */}
      <div className="profile-layout">

        {/* Profile Card */}
        <div className="profile-main-card">

          <div className="profile-top">

            <div className="profile-avatar">
              MK
            </div>

            <div className="profile-heading">

              <h2>{student.name}</h2>

              <p>
                {student.course} • Section {student.section}
              </p>

              <span className="profile-active">
                ● Active Student
              </span>

            </div>

          </div>

          {/* Student Information */}
          <div className="profile-section">

            <h3>Student Information</h3>

            <div className="profile-info-grid">

              <div className="profile-info-item">
                <span>Student ID</span>
                <strong>{student.studentId}</strong>
              </div>

              <div className="profile-info-item">
                <span>Roll Number</span>
                <strong>{student.rollNo}</strong>
              </div>

              <div className="profile-info-item">
                <span>Course</span>
                <strong>{student.course}</strong>
              </div>

              <div className="profile-info-item">
                <span>Semester</span>
                <strong>{student.semester}</strong>
              </div>

              <div className="profile-info-item">
                <span>Section</span>
                <strong>{student.section}</strong>
              </div>

              <div className="profile-info-item">
                <span>Academic Status</span>
                <strong>Active</strong>
              </div>

            </div>

          </div>

          {/* Contact Information */}
          <div className="profile-section">

            <h3>Contact Information</h3>

            <div className="profile-info-grid">

              <div className="profile-info-item">
                <span>Email Address</span>
                <strong>{student.email}</strong>
              </div>

              <div className="profile-info-item">
                <span>Phone Number</span>
                <strong>{student.phone}</strong>
              </div>

            </div>

          </div>

        </div>

        {/* Side Card */}
        <div className="profile-side-card">

          <div className="profile-side-icon">
            🎓
          </div>

          <h2>Student Account</h2>

          <p>
            Your profile information is used across
            NAV GET YOU services.
          </p>

          <div className="profile-side-item">
            <span>🎯</span>
            <div>
              <strong>Course</strong>
              <small>{student.course}</small>
            </div>
          </div>

          <div className="profile-side-item">
            <span>📚</span>
            <div>
              <strong>Semester</strong>
              <small>{student.semester}</small>
            </div>
          </div>

          <div className="profile-side-item">
            <span>🏫</span>
            <div>
              <strong>Section</strong>
              <small>{student.section}</small>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
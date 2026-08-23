import { useState } from "react";

function Complaint({ onBack }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
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

        <span>📝</span>

        <div>
          <h1>Complaint Portal</h1>

          <p>
            Submit and track your campus complaints easily.
          </p>
        </div>

      </div>

      {/* Main Content */}
      <div className="complaint-layout">

        {/* Form */}
        <div className="complaint-card">

          <div className="complaint-card-header">
            <h2>Submit a Complaint</h2>

            <p>
              Tell us about your issue and we will look into it.
            </p>
          </div>

          {submitted ? (

            <div className="complaint-success">

              <div className="success-icon">
                ✓
              </div>

              <h2>Complaint Submitted!</h2>

              <p>
                Your complaint has been successfully submitted.
              </p>

              <span>
                Complaint ID: #NGY-{Math.floor(Math.random() * 9000 + 1000)}
              </span>

              <button
                className="auth-btn"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Complaint
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              {/* Category */}
              <div className="input-group">

                <label>
                  Complaint Category
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select category
                  </option>

                  <option value="Academic">
                    Academic
                  </option>

                  <option value="Infrastructure">
                    Infrastructure
                  </option>

                  <option value="Faculty">
                    Faculty
                  </option>

                  <option value="Transport">
                    Transport
                  </option>

                  <option value="Hostel">
                    Hostel
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

              {/* Subject */}
              <div className="input-group">

                <label>
                  Complaint Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter complaint subject"
                  required
                />

              </div>

              {/* Description */}
              <div className="input-group">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your issue..."
                  rows="6"
                  required
                />

              </div>

              <button
                type="submit"
                className="complaint-submit"
              >
                Submit Complaint →
              </button>

            </form>

          )}

        </div>

        {/* Status Card */}
        <div className="complaint-status-card">

          <h2>My Complaints</h2>

          <div className="status-item">

            <div className="status-icon">
              📋
            </div>

            <div>
              <strong>Total Complaints</strong>
              <span>0 complaints</span>
            </div>

          </div>

          <div className="status-item">

            <div className="status-icon pending">
              ⏳
            </div>

            <div>
              <strong>Pending</strong>
              <span>0 complaints</span>
            </div>

          </div>

          <div className="status-item">

            <div className="status-icon progress">
              🔄
            </div>

            <div>
              <strong>In Progress</strong>
              <span>0 complaints</span>
            </div>

          </div>

          <div className="status-item">

            <div className="status-icon resolved">
              ✓
            </div>

            <div>
              <strong>Resolved</strong>
              <span>0 complaints</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Complaint;